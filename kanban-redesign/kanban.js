/**
 * VOXCRM KANBAN - Interactive JavaScript
 * =====================================
 * Wersja: 2.0
 * Autor: Senior Product Designer
 * Data: Styczeń 2026
 *
 * Funkcjonalności:
 * - Drag & Drop kart między kolumnami
 * - Quick Actions na kartach
 * - Filtry i wyszukiwanie
 * - Zwijanie/rozwijanie kolumn
 * - Toast notifications
 * - Modals
 */

// ============================================
// INICJALIZACJA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initDragAndDrop();
    initColumnCollapse();
    initQuickActions();
    initCardActions();
    initFilters();
    initModals();

    // Demo: Pokaż toast po załadowaniu
    setTimeout(() => {
        showToast('success', 'Pipeline załadowany', '47 aktywnych deali w 6 etapach');
    }, 1000);
});

// ============================================
// DRAG & DROP
// ============================================

function initDragAndDrop() {
    const cards = document.querySelectorAll('.deal-card');
    const columns = document.querySelectorAll('.column-body');

    cards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
    });

    columns.forEach(column => {
        column.addEventListener('dragover', handleDragOver);
        column.addEventListener('dragenter', handleDragEnter);
        column.addEventListener('dragleave', handleDragLeave);
        column.addEventListener('drop', handleDrop);
    });
}

let draggedCard = null;

function handleDragStart(e) {
    draggedCard = this;
    this.classList.add('dragging');

    // Ustawienie danych transferu
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.dealId);

    // Dodaj klasę do body dla lepszego UX
    document.body.classList.add('is-dragging');
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.body.classList.remove('is-dragging');

    // Usuń wszystkie stany drag-over
    document.querySelectorAll('.column-body').forEach(col => {
        col.classList.remove('drag-over');
    });

    draggedCard = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    // Znajdź element, nad którym jest kursor
    const afterElement = getDragAfterElement(this, e.clientY);
    const draggable = document.querySelector('.dragging');

    if (afterElement == null) {
        this.appendChild(draggable);
    } else {
        this.insertBefore(draggable, afterElement);
    }
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    // Sprawdź czy naprawdę opuszczamy kolumnę
    if (!this.contains(e.relatedTarget)) {
        this.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');

    const dealId = e.dataTransfer.getData('text/plain');
    const newStage = this.dataset.stage;

    // Zaktualizuj dane deala (w prawdziwej aplikacji - API call)
    console.log(`Deal ${dealId} przeniesiony do etapu: ${newStage}`);

    // Zaktualizuj liczniki w kolumnach
    updateColumnCounts();

    // Pokaż toast
    const stageNames = {
        'new': 'Nowy lead',
        'contacted': 'Kontakt / Oferta',
        'negotiation': 'Negocjacje',
        'reservation': 'Rezerwacja',
        'contract': 'Umowa',
        'realization': 'Realizacja',
        'won': 'Wygrane',
        'lost': 'Przegrane'
    };

    showToast('success', 'Etap zmieniony', `Deal przeniesiony do: ${stageNames[newStage]}`);
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.deal-card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateColumnCounts() {
    document.querySelectorAll('.kanban-column').forEach(column => {
        const count = column.querySelectorAll('.deal-card').length;
        const countElement = column.querySelector('.column-count');
        if (countElement) {
            countElement.textContent = count;
        }
    });
}

// ============================================
// COLUMN COLLAPSE
// ============================================

function initColumnCollapse() {
    const collapsedColumns = document.querySelectorAll('.kanban-column.collapsed');

    collapsedColumns.forEach(column => {
        column.addEventListener('click', function() {
            this.classList.toggle('collapsed');
        });
    });

    // Menu kolumny
    document.querySelectorAll('.column-menu').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showColumnMenu(this);
        });
    });
}

function showColumnMenu(button) {
    // W prawdziwej aplikacji - pokazanie dropdown menu
    console.log('Otwórz menu kolumny');

    // Demo: toggle collapse
    const column = button.closest('.kanban-column');
    if (column) {
        // Można dodać więcej opcji menu
    }
}

// ============================================
// QUICK ACTIONS
// ============================================

function initQuickActions() {
    document.querySelectorAll('.qa-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.getAttribute('title');
            const card = this.closest('.deal-card');
            const dealId = card.dataset.dealId;

            handleQuickAction(action, dealId);
        });
    });
}

function handleQuickAction(action, dealId) {
    console.log(`Akcja: ${action} dla deal ${dealId}`);

    switch(action) {
        case 'Zadzwoń':
            // Otwórz telefon lub pokaż numer
            showToast('info', 'Połączenie', 'Inicjowanie połączenia...');
            break;

        case 'Wyślij email':
            // Otwórz modal z emailem
            showToast('info', 'Email', 'Otwieranie okna email...');
            break;

        case 'Zaplanuj':
        case 'Zaplanuj aktywność':
            // Otwórz modal planowania
            showToast('info', 'Aktywność', 'Otwieranie kalendarza...');
            break;

        case 'Notatka':
            // Otwórz modal notatki
            showToast('info', 'Notatka', 'Dodawanie notatki...');
            break;

        case 'Generuj umowę':
            showToast('info', 'Umowa', 'Generowanie dokumentu...');
            break;

        case 'Harmonogram':
            showToast('info', 'Harmonogram', 'Otwieranie harmonogramu płatności...');
            break;

        case 'Dokumenty':
            showToast('info', 'Dokumenty', 'Otwieranie teczki klienta...');
            break;

        case 'Protokół odbioru':
            showToast('info', 'Protokół', 'Generowanie protokołu odbioru...');
            break;

        default:
            console.log('Nieznana akcja:', action);
    }
}

// ============================================
// CARD ACTIONS
// ============================================

function initCardActions() {
    // Kliknięcie na kartę
    document.querySelectorAll('.deal-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Nie otwieraj jeśli kliknięto na akcję
            if (e.target.closest('.quick-actions') || e.target.closest('.card-action-btn')) {
                return;
            }

            openDealDetail(this.dataset.dealId);
        });
    });

    // Menu karty (trzy kropki)
    document.querySelectorAll('.card-action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.deal-card');
            showCardMenu(card.dataset.dealId);
        });
    });
}

function openDealDetail(dealId) {
    console.log('Otwórz szczegóły deal:', dealId);
    // W prawdziwej aplikacji - przejście do widoku 360 stopni klienta
    showToast('info', 'Karta klienta', 'Otwieranie szczegółów...');
}

function showCardMenu(dealId) {
    console.log('Menu dla deal:', dealId);
    // Pokaż dropdown z opcjami
    document.getElementById('quickActionsModal').style.display = 'flex';
}

// ============================================
// FILTERS
// ============================================

function initFilters() {
    // Przycisk Szukaj
    document.querySelector('.btn-success')?.addEventListener('click', function() {
        applyFilters();
    });

    // Przycisk Wyczyść
    document.querySelector('.btn-text')?.addEventListener('click', function() {
        clearFilters();
    });

    // Zmiana filtrów
    document.querySelectorAll('.filter-select, .filter-input').forEach(filter => {
        filter.addEventListener('change', function() {
            // Opcjonalnie: auto-apply
            // applyFilters();
        });
    });
}

function applyFilters() {
    const filters = {
        investment: document.querySelector('.filter-select[name="investment"]')?.value,
        advisor: document.querySelectorAll('.filter-select')[1]?.value,
        source: document.querySelectorAll('.filter-select')[2]?.value,
        valueFrom: document.querySelector('.filter-input')?.value
    };

    console.log('Zastosuj filtry:', filters);
    showToast('success', 'Filtry zastosowane', 'Widok został zaktualizowany');

    // W prawdziwej aplikacji - filtrowanie kart
}

function clearFilters() {
    document.querySelectorAll('.filter-select').forEach(select => {
        select.selectedIndex = 0;
    });

    document.querySelectorAll('.filter-input').forEach(input => {
        input.value = '';
    });

    showToast('info', 'Filtry wyczyszczone', 'Pokazuję wszystkie deale');
}

// ============================================
// MODALS
// ============================================

function initModals() {
    // Zamknięcie modala
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal-overlay').style.display = 'none';
        });
    });

    // Zamknięcie po kliknięciu w overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });

    // Quick action items
    document.querySelectorAll('.quick-action-item').forEach(item => {
        item.addEventListener('click', function() {
            const action = this.querySelector('span').textContent;
            handleQuickAction(action, 'current');
            this.closest('.modal-overlay').style.display = 'none';
        });
    });

    // Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'fa-check',
        warning: 'fa-exclamation-triangle',
        error: 'fa-times',
        info: 'fa-info'
    };

    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${icons[type] || 'fa-info'}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(toast);

    // Zamknięcie
    toast.querySelector('.toast-close').addEventListener('click', function() {
        toast.remove();
    });

    // Auto-remove po 5 sekundach
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Formatowanie waluty
function formatCurrency(amount) {
    return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Formatowanie daty
function formatDate(date) {
    return new Intl.DateTimeFormat('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(new Date(date));
}

// Względny czas
function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    const intervals = {
        'rok': 31536000,
        'miesiąc': 2592000,
        'tydzień': 604800,
        'dzień': 86400,
        'godzina': 3600,
        'minuta': 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? (unit === 'miesiąc' ? 'e' : 'i') : ''} temu`;
        }
    }

    return 'przed chwilą';
}

// ============================================
// API SIMULATION (do testów)
// ============================================

const mockDeals = [
    {
        id: 1,
        client: { name: 'Anna Kowalczyk', phone: '512345678', email: 'a.kowalczyk@email.pl' },
        property: { investment: 'Osiedle Parkowe', unit: 'M12', area: 65, rooms: 3 },
        value: 485000,
        stage: 'new',
        source: 'www',
        activity: { type: 'phone', date: new Date(), description: 'Zadzwonić dziś, 14:00' },
        daysInStage: 2,
        advisor: 'Jan Nowak'
    },
    // ... więcej deali
];

// Symulacja pobierania danych
async function fetchDeals(filters = {}) {
    // Symulacja opóźnienia API
    await new Promise(resolve => setTimeout(resolve, 500));

    return mockDeals.filter(deal => {
        if (filters.stage && deal.stage !== filters.stage) return false;
        if (filters.advisor && deal.advisor !== filters.advisor) return false;
        if (filters.investment && deal.property.investment !== filters.investment) return false;
        return true;
    });
}

// Symulacja aktualizacji deala
async function updateDeal(dealId, updates) {
    await new Promise(resolve => setTimeout(resolve, 300));

    const deal = mockDeals.find(d => d.id === dealId);
    if (deal) {
        Object.assign(deal, updates);
        return { success: true, deal };
    }

    return { success: false, error: 'Deal not found' };
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + N - Nowy deal
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        console.log('Nowy deal');
        showToast('info', 'Nowy deal', 'Otwieranie formularza...');
    }

    // Ctrl/Cmd + F - Focus na wyszukiwarkę
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.querySelector('.search-box input')?.focus();
    }

    // ? - Pomoc / skróty klawiszowe
    if (e.key === '?' && !e.target.matches('input, textarea')) {
        console.log('Pokaż pomoc');
    }
});

// ============================================
// VIEW TOGGLE
// ============================================

document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const view = this.getAttribute('title');
        console.log('Zmiana widoku na:', view);

        // W prawdziwej aplikacji - zmiana widoku
        showToast('info', 'Widok', `Przełączono na: ${view}`);
    });
});

// ============================================
// ADD DEAL BUTTONS
// ============================================

document.querySelectorAll('.add-deal-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const column = this.closest('.kanban-column');
        const stage = column.dataset.stage;

        console.log('Dodaj deal w etapie:', stage);
        showToast('info', 'Nowy deal', 'Otwieranie formularza...');
    });
});

// ============================================
// RESPONSIVE HANDLING
// ============================================

function handleResize() {
    const width = window.innerWidth;

    // Dostosowanie dla mobile
    if (width < 768) {
        // Można zmodyfikować zachowanie
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Initial check

// ============================================
// EXPORT FUNCTIONS (dla integracji z React)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initDragAndDrop,
        initColumnCollapse,
        initQuickActions,
        showToast,
        formatCurrency,
        formatDate,
        timeAgo,
        fetchDeals,
        updateDeal
    };
}

// ============================================
// DEBUG MODE
// ============================================

const DEBUG = false;

if (DEBUG) {
    console.log('VoxCRM Kanban - Debug Mode');
    console.log('Mock deals:', mockDeals);

    // Expose functions globally for debugging
    window.voxKanban = {
        showToast,
        fetchDeals,
        updateDeal,
        mockDeals
    };
}
