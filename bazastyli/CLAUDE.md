# voxDeveloper CRM - Instrukcje dla AI

Jesteś frontend developerem pracującym nad interfejsem CRM voxDeveloper.

## Pliki stylów

```html
<link rel="stylesheet" href="/bootstrap/style.css" />
<link rel="stylesheet" href="/bootstrap/components.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
```

## Zasady

1. **NIGDY nie twórz inline styles** - używaj tylko istniejących klas CSS
2. Sprawdź dostępne klasy w `components.css` przed pisaniem kodu
3. Zachowaj spójność z istniejącymi stronami (`leady.html`, `dialog.html`)
4. Jeśli potrzebujesz nowej klasy - dodaj ją do `components.css`

## Dostępne komponenty

### Dialog/Modal
```
.dialog-overlay          - tło/overlay (dodaj .show żeby pokazać)
.dialog-modal            - kontener dialogu
.dialog-header           - nagłówek
.dialog-title            - tytuł
.dialog-close            - przycisk X
.dialog-actions          - pasek akcji pod nagłówkiem
.dialog-actions-left     - przyciski po lewej
.dialog-actions-right    - przyciski po prawej
.dialog-body             - treść dialogu
.dialog-footer           - stopka z przyciskami
```

### Formularze - Layout
```
.form-grid               - layout 2-kolumnowy (responsive)
.form-column             - kolumna formularza
.form-column-narrow      - kolumna z węższymi labelami (140px)
.form-section-title      - tytuł sekcji z zieloną kreską
.form-section-content    - zawartość sekcji
```

### Formularze - Pola
```
.form-row-horizontal     - wiersz: label (180px) + input
.form-label-horizontal   - etykieta (kolor: #174b99)
.required                - dodaje * dla wymaganych pól
.form-input              - pole tekstowe (height: 38px)
.form-select-custom      - select ze strzałką
.form-row-checkbox       - wiersz z checkboxem
.form-checkbox           - checkbox
.form-row-range          - wiersz z polami Od/Do
.form-range-inputs       - kontener dla inputów Od/Do
.form-range-label        - etykieta "Od" / "Do"
.form-range-input        - input w zakresie
.form-input-clearable    - wrapper dla inputa z przyciskiem X
.form-input-clear-btn    - przycisk X do czyszczenia
.form-input-icon-wrapper - wrapper dla inputa z ikoną
.form-input-icon         - ikona w inpucie (np. kalendarz)
```

### Przyciski
```
.btn-dialog-primary      - zielony (#8ebf29) - główna akcja
.btn-dialog-secondary    - szary outline - anuluj/zamknij
.btn-dialog-info         - niebieski (#0d6efd) - dodatkowe akcje
```

## Kolory

| Nazwa | Wartość | Użycie |
|-------|---------|--------|
| Primary | `#8ebf29` | Przyciski główne, akcenty |
| Secondary | `#174b99` | Labele formularzy |
| Border | `#dee2e6` | Obramowania |
| Background | `#f8f9fa` | Tła sekcji |

## Ikony

Bootstrap Icons - użyj klasy `bi bi-*`:
```html
<i class="bi bi-plus"></i>
<i class="bi bi-arrow-right"></i>
<i class="bi bi-clock-history"></i>
<i class="bi bi-envelope"></i>
<i class="bi bi-calendar"></i>
```

Lista ikon: https://icons.getbootstrap.com/

## Przykład struktury strony

```html
<!DOCTYPE html>
<html lang="pl" data-bs-theme="light">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tytuł - voxDeveloper CRM</title>
    <link rel="stylesheet" href="/bootstrap/style.css" />
    <link rel="stylesheet" href="/bootstrap/components.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <!-- treść -->
</body>
</html>
```

## Przykład dialogu

```html
<div class="dialog-overlay show">
    <div class="dialog-modal">
        <div class="dialog-header">
            <h5 class="dialog-title">Tytuł dialogu</h5>
            <button class="dialog-close">&times;</button>
        </div>
        <div class="dialog-body">
            <div class="form-grid">
                <div class="form-column">
                    <div class="form-section">
                        <h6 class="form-section-title">Sekcja</h6>
                        <div class="form-section-content">
                            <div class="form-row-horizontal">
                                <label class="form-label-horizontal required">Pole</label>
                                <input type="text" class="form-input">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog-footer">
            <button class="btn-dialog-secondary">Zamknij</button>
            <button class="btn-dialog-primary">Zapisz</button>
        </div>
    </div>
</div>
```

## Referencje

- `leady.html` - przykład strony z listą i dialogiem
- `dialog.html` - dokumentacja komponentów z przykładami
- `standard.pdf` - dokumentacja stylów (PDF)
