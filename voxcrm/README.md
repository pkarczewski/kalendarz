# VoxDeveloper CRM - Frontend Mockups

## 📋 Przegląd projektu

Przeprojektowane widoki systemu VoxCRM dla polskiego rynku deweloperskiego. Projekt zawiera interaktywne mockupy głównych modułów systemu.

---

## 📁 Struktura projektu

```
voxcrm/
├── index.html                          # Strona startowa (redirect)
├── lista_harmonogramow.html            # Lista harmonogramów + Kalendarz spotkań
├── planowanie_harmonogramu_20251017.html  # Formularz tworzenia harmonogramu
├── wybor_terminu_20251017.html         # Publiczna strona wyboru terminu (dla klientów)
├── kanban.html                         # Pipeline / Kanban deali
├── kanban.js                           # JavaScript dla Kanban
├── styles.css                          # Style dla Kanban
├── oferta-mockup.html                  # Mockup widoku oferty
├── react/
│   └── KanbanBoard.jsx                 # Komponenty React (do integracji)
├── package.json                        # Zależności npm
└── README.md                           # Ten plik
```

---

## 🚀 Uruchomienie

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski (Vite)
npm run dev

# Otwórz w przeglądarce
# http://localhost:5173/voxcrm/
```

---

## 📦 Moduły

### 1. Harmonogramy i Kalendarz (`lista_harmonogramow.html`)

Główny widok zarządzania harmonogramami spotkań:

- **Zakładka "Harmonogramy"** - lista utworzonych harmonogramów
  - Tworzenie nowego harmonogramu (modal)
  - Kopiowanie linku dla klientów
  - Filtrowanie po statusie, typie, osobie

- **Zakładka "Spotkania"** - kalendarz miesięczny
  - Widok wszystkich zarezerwowanych spotkań
  - Filtry: harmonogram, typ spotkania, osoba
  - Statusy: Planowane, Potwierdzone, Anulowane
  - Kliknięcie spotkania → szczegóły + akcje

### 2. Kanban / Pipeline (`kanban.html`)

Przeprojektowany widok pipeline'u deali:

| Element | Opis |
|---------|------|
| 8 etapów | Nowy lead → Kontakt → Negocjacje → Rezerwacja → Umowa → Realizacja → Wygrane/Przegrane |
| Karty deali | Klient, nieruchomość, wartość, następna aktywność |
| Quick actions | Zadzwoń, Email, Zaplanuj, Notatka |
| Rotting deals | Wskaźnik deali bez kontaktu 14+ dni |
| Drag & drop | Przeciąganie między etapami |

### 3. Wybór terminu (`wybor_terminu_20251017.html`)

Publiczna strona dla klientów do rezerwacji terminu spotkania.

---

## 🎨 Design System

### Kolory

```css
/* Primary (VoxCRM Brand) */
--color-primary: #0066cc;
--color-primary-dark: #004d99;
--color-primary-light: #3399ff;

/* Semantic */
--color-success: #4CAF50;    /* Zielony - sukces */
--color-warning: #FF9800;    /* Pomarańczowy - uwaga */
--color-danger: #f44336;     /* Czerwony - pilne */
--color-info: #00BCD4;       /* Turkusowy - info */
```

### Typografia

- Font: Open Sans
- Rozmiary: 11-18px
- Wagi: 400 (normal), 600 (semibold), 700 (bold)

### Spacing

System 8px: 4, 8, 12, 16, 24, 32, 48px

---

## 🔄 Dane

Mockupy używają `localStorage` do przechowywania danych:

- `schedules` - harmonogramy i rezerwacje
- `deals` - deale w pipeline (kanban)

Przy pierwszym uruchomieniu ładowane są dane przykładowe.

---

## 📝 Changelog

### v2.1 (Styczeń 2026)
- ✅ Połączenie modułów kalendarz + kanban
- ✅ Nazwisko przed imieniem w całym projekcie
- ✅ Tekstowe statusy spotkań (Planowane/Potwierdzone)
- ✅ Filtry nad kalendarzem

### v2.0 (Styczeń 2026)
- ✅ Modal tworzenia harmonogramu
- ✅ Integracja kalendarza z rezerwacjami
- ✅ Redesign Kanban z Design Systemem VoxCRM

---

## 📄 Licencja

Projekt wewnętrzny VoxCRM. Wszystkie prawa zastrzeżone.
