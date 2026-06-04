const CONSENT_KEY = 'reisekit24_cookie_consent';
const CONSENT_VERSION = '1.0';

const necessaryOnly = {
  necessary: true,
  analytics: false,
  marketing: false,
  external: false
};

function withTimestamp(consent) {
  return {
    necessary: true,
    analytics: Boolean(consent.analytics),
    marketing: Boolean(consent.marketing),
    external: Boolean(consent.external),
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION
  };
}

function getCookieConsent() {
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const consent = JSON.parse(stored);
    if (consent.version !== CONSENT_VERSION) return null;

    return {
      necessary: true,
      analytics: Boolean(consent.analytics),
      marketing: Boolean(consent.marketing),
      external: Boolean(consent.external),
      timestamp: consent.timestamp,
      version: consent.version
    };
  } catch {
    return null;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtagFallback() {
    window.dataLayer.push(arguments);
  };
}

function applyConsentMode(consent) {
  ensureGtag();
  window.gtag('consent', 'update', {
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied'
  });
}

function loadAnalyticsScripts() {
  // Future hook: load GA4 only after analytics consent is granted.
}

function loadMarketingScripts() {
  // Future hook: load Google Ads, Meta Pixel or TikTok Pixel only after marketing consent is granted.
}

function loadExternalPartnerWidgets() {
  // Future hook: load GetYourGuide, Booking.com, Airalo and other partner widgets only after external consent is granted.
}

function hasAnalyticsConsent() {
  return Boolean(getCookieConsent()?.analytics);
}

function hasMarketingConsent() {
  return Boolean(getCookieConsent()?.marketing);
}

function hasExternalConsent() {
  return Boolean(getCookieConsent()?.external);
}

function updateExternalPlaceholders(consent) {
  document.querySelectorAll('[data-external-consent-placeholder]').forEach((placeholder) => {
    placeholder.hidden = Boolean(consent.external);
  });

  document.querySelectorAll('[data-external-widget-content]').forEach((widget) => {
    widget.hidden = !consent.external;
  });
}

function applyOptionalHooks(consent) {
  if (consent.analytics) loadAnalyticsScripts();
  if (consent.marketing) loadMarketingScripts();
  if (consent.external) loadExternalPartnerWidgets();
  updateExternalPlaceholders(consent);
}

function setCookieConsent(consent) {
  const savedConsent = withTimestamp(consent);
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(savedConsent));
  } catch {
    return savedConsent;
  }

  applyConsentMode(savedConsent);
  applyOptionalHooks(savedConsent);
  window.dispatchEvent(new CustomEvent('reisekit24:cookie-consent-changed', { detail: savedConsent }));
  return savedConsent;
}

function getSelectedConsent() {
  return withTimestamp({
    analytics: document.querySelector('[data-cookie-option="analytics"]')?.checked,
    marketing: document.querySelector('[data-cookie-option="marketing"]')?.checked,
    external: document.querySelector('[data-cookie-option="external"]')?.checked
  });
}

function syncSettings(consent) {
  const current = consent || getCookieConsent() || withTimestamp(necessaryOnly);
  document.querySelectorAll('[data-cookie-option]').forEach((field) => {
    field.checked = Boolean(current[field.dataset.cookieOption]);
  });
}

function showBanner() {
  const banner = document.querySelector('[data-cookie-banner]');
  if (banner) banner.hidden = false;
}

function hideBanner() {
  const banner = document.querySelector('[data-cookie-banner]');
  if (banner) banner.hidden = true;
}

function closeCookieSettings() {
  const modal = document.querySelector('[data-cookie-modal]');
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('cookie-modal-open');
}

function openCookieSettings() {
  const modal = document.querySelector('[data-cookie-modal]');
  if (!modal) return;

  syncSettings();
  modal.hidden = false;
  document.body.classList.add('cookie-modal-open');
  window.setTimeout(() => {
    modal.querySelector('[data-cookie-save]')?.focus();
  }, 0);
}

function saveAndClose(consent) {
  setCookieConsent(consent);
  hideBanner();
  closeCookieSettings();
}

function initCookieConsent() {
  ensureGtag();

  window.reisekit24CookieConsent = {
    getCookieConsent,
    setCookieConsent,
    hasAnalyticsConsent,
    hasMarketingConsent,
    hasExternalConsent,
    openCookieSettings,
    applyConsentMode,
    loadAnalyticsScripts,
    loadMarketingScripts,
    loadExternalPartnerWidgets
  };

  const storedConsent = getCookieConsent();
  if (storedConsent) {
    applyConsentMode(storedConsent);
    applyOptionalHooks(storedConsent);
  } else {
    showBanner();
    updateExternalPlaceholders(necessaryOnly);
  }

  document.querySelectorAll('[data-cookie-accept-all], [data-cookie-modal-accept-all]').forEach((button) => {
    button.addEventListener('click', () => {
      saveAndClose({ necessary: true, analytics: true, marketing: true, external: true });
    });
  });

  document.querySelectorAll('[data-cookie-necessary], [data-cookie-modal-necessary]').forEach((button) => {
    button.addEventListener('click', () => {
      saveAndClose(necessaryOnly);
    });
  });

  document.querySelectorAll('[data-cookie-settings]').forEach((button) => {
    button.addEventListener('click', openCookieSettings);
  });

  document.querySelector('[data-cookie-save]')?.addEventListener('click', () => {
    saveAndClose(getSelectedConsent());
  });

  document.querySelectorAll('[data-cookie-close]').forEach((button) => {
    button.addEventListener('click', closeCookieSettings);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCookieSettings();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
  initCookieConsent();
}

// Datenschutz TODO: When GA4, Google Ads, Meta Pixel, TikTok Pixel or partner widgets are added, the Datenschutz page must be updated with the exact tools, providers, purposes, legal basis, retention periods and opt-out information.
