# voxDeveloper CRM - Style Guide

Baza stylów i komponentów UI dla mockupów interfejsu CRM.

## Struktura

```
bootstrap/
├── style.css         # Bootstrap 5 + custom theme
├── components.css    # Komponenty UI (dialogi, formularze, przyciski)
└── assets/
    └── logo.svg      # Logo

dialog.html           # Dokumentacja komponentów + przykład dialogu
leady.html            # Przykład strony z listą i dialogiem
standard.pdf          # Dokumentacja stylów (PDF)
```

## Użycie

```html
<!DOCTYPE html>
<html lang="pl" data-bs-theme="light">
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/bootstrap/style.css" />
    <link rel="stylesheet" href="/bootstrap/components.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <!-- treść -->
</body>
</html>
```

## Dostępne komponenty

### Dialog/Modal
- `.dialog-overlay`, `.dialog-modal`
- `.dialog-header`, `.dialog-title`, `.dialog-close`
- `.dialog-actions`, `.dialog-actions-left`, `.dialog-actions-right`
- `.dialog-body`, `.dialog-footer`

### Formularze
- `.form-grid` - layout 2-kolumnowy
- `.form-column`, `.form-column-narrow`
- `.form-section-title`, `.form-section-content`
- `.form-row-horizontal`, `.form-label-horizontal`, `.required`
- `.form-input`, `.form-select-custom`
- `.form-row-checkbox`, `.form-checkbox`
- `.form-row-range`, `.form-range-inputs`, `.form-range-input`
- `.form-input-clearable`, `.form-input-clear-btn`
- `.form-input-icon-wrapper`, `.form-input-icon`

### Przyciski
- `.btn-dialog-primary` - zielony (#8ebf29)
- `.btn-dialog-secondary` - szary outline
- `.btn-dialog-info` - niebieski (#0d6efd)

## Kolory
- Primary: `#8ebf29` (zielony)
- Secondary/Labels: `#174b99` (ciemny niebieski)
- Ikony: Bootstrap Icons (`bi bi-*`)

## Uruchomienie lokalne

```bash
python3 -m http.server 8080
# Otwórz http://localhost:8080/leady.html
```
