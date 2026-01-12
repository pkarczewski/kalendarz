# System Rezerwacji Terminów

System do planowania harmonogramów i rezerwacji spotkań.

## Pliki projektu

- `planowanie_harmonogramu_20251017.html` - Formularz do tworzenia harmonogramów spotkań
- `wybor_terminu_20251017.html` - Interfejs do wyboru dostępnych terminów
- `index.html` - Strona główna z nawigacją

## Jak uruchomić

### Sposób 1: Bezpośrednio w przeglądarce
1. Otwórz plik `index.html` w przeglądarce
2. Lub otwórz dowolny plik HTML bezpośrednio

### Sposób 2: Lokalny serwer (zalecane)

#### Python 3
```bash
python3 -m http.server 8000
```
Następnie otwórz w przeglądarce: `http://localhost:8000`

#### Node.js (jeśli masz zainstalowany)
```bash
npx http-server -p 8000
```

#### PHP (jeśli masz zainstalowany)
```bash
php -S localhost:8000
```

## Funkcjonalności

### Planowanie harmonogramu (`planowanie_harmonogramu_20251017.html`)
- Tworzenie harmonogramów spotkań
- Definiowanie okien dostępności
- Przypisywanie do użytkowników
- Generowanie linków publicznych
- Walidacja w czasie rzeczywistym
- Wykrywanie nakładających się slotów

### Wybór terminu (`wybor_terminu_20251017.html`)
- Interaktywny kalendarz
- Wybór dostępnych terminów
- Filtrowanie po dacie
- Responsywny design

## Wymagania

- Nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge)
- Brak dodatkowych zależności - wszystko działa lokalnie

## Struktura projektu

```
kalendarz/
├── index.html                          # Strona główna
├── planowanie_harmonogramu_20251017.html  # Formularz harmonogramu
├── wybor_terminu_20251017.html         # Wybór terminu
├── README.md                           # Dokumentacja
└── .vscode/
    └── launch.json                     # Konfiguracja VS Code
```

## Uwagi

- Wszystkie pliki są samodzielne (self-contained)
- Nie wymagają połączenia z internetem
- Gotowe do użycia lokalnie lub na serwerze

