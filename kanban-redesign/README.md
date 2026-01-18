# VoxCRM Kanban Redesign

## 📋 Przegląd projektu

Przeprojektowany widok Pipeline (Kanban) dla systemu VoxCRM, wzorowany na najlepszych praktykach z Pipedrive i HubSpot, dostosowany do specyfiki polskiego rynku deweloperskiego.

---

## 🎯 Główne ulepszenia vs obecny "MATRIX"

| Element | Było (MATRIX) | Jest (nowy Kanban) |
|---------|---------------|-------------------|
| Kolumny | 18 etapów | 8 etapów (6 aktywnych + 2 zwinięte) |
| Karta deala | 2 pola (imię, dni) | 8+ pól + quick actions |
| Wartość | Niewidoczna | Prominent na karcie i sumach kolumn |
| Aktywności | Brak | Widoczna następna aktywność |
| Rotting deals | Kolory (niejasne) | Jasny indicator + animacja |
| Quick actions | Brak | 4 akcje na hover |
| Filtry | Podstawowe | Rozbudowane + zapisane widoki |
| Responsywność | Słaba | Pełna (desktop/tablet/mobile) |

---

## 📁 Struktura plików

```
kanban-redesign/
├── index.html          # Główny plik HTML (standalone demo)
├── styles.css          # Kompletny CSS z design systemem
├── kanban.js           # Vanilla JS z interakcjami
├── react/
│   └── KanbanBoard.jsx # Komponenty React (do integracji)
└── README.md           # Ten plik
```

---

## 🚀 Uruchomienie

### Wersja HTML (standalone):
```bash
# Po prostu otwórz w przeglądarce:
open index.html
```

### Wersja React:
```bash
# Skopiuj KanbanBoard.jsx do swojego projektu React
# Zainstaluj zależności:
npm install react-dnd react-dnd-html5-backend

# Import w swoim komponencie:
import { KanbanApp } from './KanbanBoard';
```

---

## 🎨 Design System

### Kolory (CSS Variables)

```css
/* Primary (VoxCRM Brand) */
--color-primary: #0066cc;
--color-primary-dark: #004d99;
--color-primary-light: #3399ff;

/* Semantic */
--color-success: #4CAF50;    /* Zielony - sukces, wpłacone */
--color-warning: #FF9800;    /* Pomarańczowy - uwaga, wygasa */
--color-danger: #f44336;     /* Czerwony - pilne, przeterminowane */
--color-info: #00BCD4;       /* Turkusowy - info, kontakt */
```

### Etapy Pipeline

| Etap | Kolor | Opis |
|------|-------|------|
| Nowy lead | `#2196F3` | Świeże zapytania |
| Kontakt/Oferta | `#00BCD4` | Po pierwszym kontakcie |
| Negocjacje | `#FF9800` | Aktywne rozmowy o warunkach |
| Rezerwacja | `#9C27B0` | Ustna lub pisemna |
| Umowa | `#4CAF50` | Deweloperska/przedwstępna |
| Realizacja | `#8BC34A` | Budowa, odbiór |
| Wygrane | `#2E7D32` | Archiwum (zwinięte) |
| Przegrane | `#c62828` | Archiwum (zwinięte) |

---

## 🃏 Anatomia karty deala

```
┌─────────────────────────────────────┐
│ [SOURCE BADGE]        [BADGES] [...] │ ← Header
├─────────────────────────────────────┤
│ (AK) Anna Kowalczyk                  │ ← Client
│      📞 512 345 678                  │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ Osiedle Parkowe                 │ │ ← Property
│ │ M12 • 65m² • 3 pok.             │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ 485 000 zł         7 462 zł/m²      │ ← Value
├─────────────────────────────────────┤
│ 📞 Zadzwonić dziś, 14:00            │ ← Activity
├─────────────────────────────────────┤
│ 🕐 2 dni                    [avatar] │ ← Footer
└─────────────────────────────────────┘
│  [📞] [✉️] [📅] [📝]                  │ ← Quick Actions (hover)
└─────────────────────────────────────┘
```

---

## 🔥 Stany kart

### 1. **Standard** - domyślna karta
### 2. **Warning** - brak aktywności
```css
.deal-card.warning {
    border-left: 3px solid var(--color-warning);
}
```

### 3. **Rotting** - deal "starzeje się" (14+ dni bez kontaktu)
```css
.deal-card.rotting {
    border-left: 3px solid var(--color-danger);
    /* + pulsujący indicator */
}
```

### 4. **High Value** - wartość > 1M PLN
```css
.deal-card.high-value {
    border-left: 3px solid #FFA000;
    /* + złota gwiazdka */
}
```

### 5. **Expiring** - rezerwacja wygasa
```css
.deal-card.expiring {
    /* + countdown indicator */
}
```

---

## ⚡ Quick Actions

Akcje dostępne na hover karty (bez wchodzenia w szczegóły):

| Ikona | Akcja | Opis |
|-------|-------|------|
| 📞 | Zadzwoń | Click-to-call |
| ✉️ | Email | Otwiera composer |
| 📅 | Zaplanuj | Dodaje aktywność |
| 📝 | Notatka | Quick note |

**Kontekstowe** (zależne od etapu):
- Rezerwacja: 📄 Generuj umowę
- Umowa: 📊 Harmonogram, 📁 Dokumenty
- Realizacja: ✅ Protokół odbioru

---

## 🔧 Customizacja

### Dodanie nowego etapu:

```javascript
// W kanban.js lub KanbanBoard.jsx
const STAGES = [
    // ... existing stages
    { id: 'custom', name: 'Mój etap', color: '#9C27B0' },
];
```

### Zmiana kolorów źródeł:

```css
/* W styles.css */
.source-badge.moje-zrodlo {
    background: #YOUR_COLOR_BG;
    color: #YOUR_COLOR;
}
```

### Dodanie nowego badge'a:

```css
.badge-custom {
    background: #COLOR_BG;
    color: #COLOR;
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Szerokość kolumny | Uwagi |
|------------|-------------------|-------|
| Desktop | 300px | Pełna funkcjonalność |
| Tablet (<1200px) | 280px | Ukryty nav |
| Mobile (<768px) | 260px | Uproszczone filtry |

---

## 🔄 Integracja z API VoxCRM

### Endpoint'y do zaimplementowania:

```javascript
// Pobierz deale
GET /api/pipeline/deals?stage={stage}&advisor={id}&investment={id}

// Przenieś deal
PATCH /api/pipeline/deals/{id}/move
Body: { newStage: 'negotiation' }

// Quick actions
POST /api/pipeline/deals/{id}/activity
Body: { type: 'phone', scheduledAt: '2026-01-20T14:00:00' }
```

---

## 📈 Metryki do śledzenia

Po wdrożeniu rekomendowane jest śledzenie:

1. **Czas do pierwszego kontaktu** - czy handlowcy szybciej reagują?
2. **Średni czas w etapie** - czy deale szybciej się przesuwają?
3. **Rotting deals ratio** - czy mniej deali "starzeje się"?
4. **Conversion rate per stage** - gdzie tracisz klientów?

---

## 🐛 Znane ograniczenia

1. Drag & drop na mobile wymaga touch events (do implementacji)
2. Maksymalnie 100 kart per kolumna (performance)
3. Obrazki avatarów wymagają serwera plików

---

## 📝 Changelog

### v2.0 (Styczeń 2026)
- ✅ Kompletny redesign z Design Systemem VoxCRM
- ✅ 8 kolumn (vs 18 w MATRIX)
- ✅ Rozbudowane karty deali
- ✅ Quick actions
- ✅ Rotting deals indicator
- ✅ Drag & drop
- ✅ Filtry i zapisane widoki
- ✅ Komponenty React

---

## 👨‍💻 Autor

Senior Product Designer - VoxCRM Redesign Project

---

## 📄 Licencja

Projekt wewnętrzny VoxCRM. Wszystkie prawa zastrzeżone.
