# reisekit24

Lekki statyczny projekt Astro dla afiliacyjnej strony podróżniczej na rynek niemiecki.

## Najważniejsze

- Produkcyjny branch: `main`
- Build statyczny: `npm run build`
- Gotowa strona po buildzie: `dist/`
- Docelowy katalog na Hostingerze: `public_html`
- Nie zapisuj w repo żadnych haseł, tokenów, danych FTP ani danych do bazy.

Repo jest przygotowane tak, aby Hostinger Git Deployment mógł sklonować branch `main` do `public_html`. Plik `.htaccess` w katalogu głównym serwuje gotową stronę z `dist/`, dlatego katalog `dist/` jest celowo commitowany.

## Jak uruchomić lokalnie

```bash
npm install
npm run dev
```

Lokalny adres pojawi się w terminalu, zwykle:

```text
http://localhost:4321
```

## Jak zbudować projekt przed commitem

Po każdej zmianie w kodzie lub treści uruchom:

```bash
npm run build
```

Następnie commituj zarówno pliki źródłowe, jak i zaktualizowany katalog `dist/`.

## Co edytować najczęściej

- `src/data/site.js` - nazwa strony, menu, domena.
- `src/data/affiliateLinks.js` - linki afiliacyjne.
- `src/data/categories.js` - kategorie i opisy.
- `src/data/blog.js` - wpisy blogowe.
- `src/data/faqs.js` - FAQ.
- `src/data/images.js` - główne ścieżki obrazów.
- `src/styles/global.css` - wygląd strony.
- `public/images/` - obrazy `.webp` do łatwej podmiany.

## Wdrożenie przez Hostinger hPanel Git Deployment

### 1. Przygotuj GitHub

1. Utwórz repozytorium na GitHubie, jeśli jeszcze go nie ma.
2. Upewnij się, że produkcyjny branch nazywa się `main`.
3. Wypchnij projekt do GitHuba:

```bash
git push -u origin main
```

Adres repozytorium do użycia w Hostingerze będzie wyglądał podobnie do:

```text
https://github.com/TWOJ-LOGIN/reisekit24.git
```

Jeśli repozytorium jest prywatne, połącz je w Hostingerze przez GitHub OAuth albo dodaj klucz SSH/deploy key zgodnie z instrukcją hPanel. Nie zapisuj tych danych w repo.

### 2. Dodaj repozytorium w Hostingerze

1. Zaloguj się do Hostinger hPanel.
2. Wejdź w `Websites`.
3. Przy swojej domenie kliknij `Manage` albo `Dashboard`.
4. W bocznym menu znajdź `Git` lub `Advanced` → `Git`.
5. Wybierz dodanie nowego repozytorium albo połączenie z GitHubem.
6. Podaj adres repozytorium:

```text
https://github.com/TWOJ-LOGIN/reisekit24.git
```

7. Branch ustaw na:

```text
main
```

8. Install Path ustaw tak, aby repo trafiło do katalogu strony:

```text
pozostaw puste
```

W Hostingerze puste `Install Path` zwykle oznacza katalog root strony, czyli `public_html`. Jeśli hPanel pokazuje pole `Root directory`, wybierz/domyslnie zostaw `public_html`.

Ważne: katalog `public_html` powinien być pusty przed pierwszym wdrożeniem Git, inaczej Hostinger może odrzucić deployment.

### 3. Włącz Auto Deployment

1. Po dodaniu repozytorium w hPanel otwórz jego ustawienia Git.
2. Włącz `Auto Deployment`, jeśli jest dostępne.
3. Jeśli Hostinger pokazuje `Webhook URL`, skopiuj go.

### 4. Dodaj webhook w GitHubie, jeśli Hostinger tego wymaga

Jeśli hPanel nie doda webhooka automatycznie:

1. Otwórz repozytorium na GitHubie.
2. Wejdź w `Settings` → `Webhooks`.
3. Kliknij `Add webhook`.
4. Wklej `Webhook URL` z Hostingera jako `Payload URL`.
5. `Content type` ustaw na:

```text
application/json
```

6. Zostaw zdarzenie:

```text
Just the push event
```

7. Zaznacz `Active`.
8. Zapisz webhook.

Od tej pory push do brancha `main` powinien uruchamiać wdrożenie na Hostingerze.

## Dlaczego w repo jest katalog dist?

To jest statyczna strona Astro. Hostinger Git Deployment na zwykłym hostingu najbezpieczniej obsłuży gotowe pliki HTML/CSS/JS.

Dlatego workflow jest taki:

```text
edycja w Codex → npm run build → commit dist → push main → Hostinger Auto Deployment → public_html
```

Plik `.htaccess` kieruje ruch z `public_html` do gotowej strony w `dist/`.

## Co wrzucić na serwer ręcznie, jeśli nie używasz Git Deployment

Jeśli wdrażasz bez Git, uruchom:

```bash
npm run build
```

Następnie wgraj zawartość folderu `dist/` bezpośrednio do `public_html`.

## Ważne przed publikacją

- Uzupełnij dane firmy w `src/pages/impressum.astro`.
- Przygotuj finalną treść polityki prywatności w `src/pages/datenschutz.astro`.
- Sprawdź wymagania prawne dla rynku niemieckiego przed publikacją.
- Nie commituj `.env`, haseł, tokenów, danych FTP ani danych logowania.
