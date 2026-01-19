/**
 * VOXCRM KANBAN - React Components
 * ================================
 * Wersja: 2.0
 *
 * Komponenty:
 * - KanbanBoard - główna tablica
 * - KanbanColumn - kolumna etapu
 * - DealCard - karta deala
 * - QuickActions - szybkie akcje
 * - FilterBar - pasek filtrów
 */

import React, { useState, useCallback } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// ============================================
// TYPES & CONSTANTS
// ============================================

const ITEM_TYPE = 'DEAL_CARD';

const STAGES = [
    { id: 'new', name: 'Nowy lead', color: '#2196F3' },
    { id: 'contacted', name: 'Kontakt / Oferta', color: '#00BCD4' },
    { id: 'negotiation', name: 'Negocjacje', color: '#FF9800' },
    { id: 'reservation', name: 'Rezerwacja', color: '#9C27B0' },
    { id: 'contract', name: 'Umowa', color: '#4CAF50' },
    { id: 'realization', name: 'Realizacja', color: '#8BC34A' },
    { id: 'won', name: 'Wygrane', color: '#2E7D32', collapsed: true },
    { id: 'lost', name: 'Przegrane', color: '#c62828', collapsed: true },
];

const SOURCE_BADGES = {
    www: { label: 'WWW', className: 'www' },
    otodom: { label: 'Otodom', className: 'otodom' },
    rynek: { label: 'Rynek Pierwotny', className: 'rynek' },
    facebook: { label: 'Facebook', className: 'facebook' },
    polecenie: { label: 'Polecenie', className: 'polecenie' },
};

// ============================================
// MAIN KANBAN BOARD
// ============================================

export const KanbanBoard = ({ deals, onDealMove, onDealClick, onQuickAction }) => {
    const [filteredDeals, setFilteredDeals] = useState(deals);

    const handleDrop = useCallback((dealId, newStage) => {
        onDealMove?.(dealId, newStage);
    }, [onDealMove]);

    const getDealsByStage = (stageId) => {
        return filteredDeals.filter(deal => deal.stage === stageId);
    };

    const getTotalValue = (stageId) => {
        return getDealsByStage(stageId).reduce((sum, deal) => sum + deal.value, 0);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="kanban-container">
                <div className="kanban-board">
                    {STAGES.map(stage => (
                        <KanbanColumn
                            key={stage.id}
                            stage={stage}
                            deals={getDealsByStage(stage.id)}
                            totalValue={getTotalValue(stage.id)}
                            onDrop={handleDrop}
                            onDealClick={onDealClick}
                            onQuickAction={onQuickAction}
                        />
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

// ============================================
// KANBAN COLUMN
// ============================================

export const KanbanColumn = ({
    stage,
    deals,
    totalValue,
    onDrop,
    onDealClick,
    onQuickAction
}) => {
    const [isCollapsed, setIsCollapsed] = useState(stage.collapsed || false);

    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        drop: (item) => {
            onDrop(item.id, stage.id);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('pl-PL', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount) + ' zł';
    };

    if (isCollapsed) {
        return (
            <div
                className="kanban-column collapsed"
                onClick={() => setIsCollapsed(false)}
            >
                <div className="column-header">
                    <div className="column-title">
                        <span
                            className="column-indicator"
                            style={{ background: stage.color }}
                        />
                        <h3>{stage.name}</h3>
                        <span className="column-count">{deals.length}</span>
                    </div>
                    <button className="column-expand">
                        <i className="fas fa-chevron-down" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`kanban-column ${isOver ? 'drag-over' : ''}`}
            data-stage={stage.id}
        >
            <div className="column-header">
                <div className="column-title">
                    <span
                        className="column-indicator"
                        style={{ background: stage.color }}
                    />
                    <h3>{stage.name}</h3>
                    <span className="column-count">{deals.length}</span>
                </div>
                <div className="column-value">{formatCurrency(totalValue)}</div>
                <button
                    className="column-menu"
                    onClick={() => setIsCollapsed(true)}
                >
                    <i className="fas fa-ellipsis-h" />
                </button>
            </div>

            <div
                ref={drop}
                className={`column-body ${isOver ? 'drag-over' : ''}`}
                data-stage={stage.id}
            >
                {deals.map(deal => (
                    <DealCard
                        key={deal.id}
                        deal={deal}
                        onClick={() => onDealClick?.(deal)}
                        onQuickAction={onQuickAction}
                    />
                ))}
            </div>

            <div className="column-footer">
                <button className="add-deal-btn">
                    <i className="fas fa-plus" /> Dodaj deal
                </button>
            </div>
        </div>
    );
};

// ============================================
// DEAL CARD
// ============================================

export const DealCard = ({ deal, onClick, onQuickAction }) => {
    const [showQuickActions, setShowQuickActions] = useState(false);

    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE,
        item: { id: deal.id, type: ITEM_TYPE },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const getCardClassName = () => {
        const classes = ['deal-card'];

        if (isDragging) classes.push('dragging');
        if (deal.isRotting) classes.push('rotting');
        if (deal.isHighValue) classes.push('high-value');
        if (deal.isExpiring) classes.push('expiring');
        if (deal.hasWarning) classes.push('warning');
        if (deal.isSuccess) classes.push('success');

        return classes.join(' ');
    };

    const getAgeClassName = () => {
        if (deal.daysInStage <= 3) return 'fresh';
        if (deal.daysInStage <= 7) return 'normal';
        if (deal.daysInStage <= 14) return 'warning';
        return 'danger';
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('pl-PL', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount) + ' zł';
    };

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const sourceBadge = SOURCE_BADGES[deal.source] || SOURCE_BADGES.www;

    return (
        <div
            ref={drag}
            className={getCardClassName()}
            data-deal-id={deal.id}
            onClick={onClick}
            onMouseEnter={() => setShowQuickActions(true)}
            onMouseLeave={() => setShowQuickActions(false)}
        >
            {/* Rotting Indicator */}
            {deal.isRotting && (
                <div className="rotting-indicator" title="Deal wymaga uwagi">
                    <i className="fas fa-exclamation-triangle" />
                </div>
            )}

            {/* High Value Indicator */}
            {deal.isHighValue && (
                <div className="high-value-indicator">
                    <i className="fas fa-star" />
                </div>
            )}

            {/* Expiring Indicator */}
            {deal.isExpiring && (
                <div className="expiring-indicator">
                    <i className="fas fa-hourglass-half" /> {deal.expiringDays} dni
                </div>
            )}

            {/* Card Header */}
            <div className="card-header">
                <div className="card-source">
                    <span className={`source-badge ${sourceBadge.className}`}>
                        {sourceBadge.label}
                    </span>
                </div>

                {deal.badges && (
                    <div className="card-badges">
                        {deal.badges.map((badge, index) => (
                            <span
                                key={index}
                                className={`badge-${badge.type}`}
                                title={badge.title}
                            >
                                <i className={`fas fa-${badge.icon}`} />
                            </span>
                        ))}
                    </div>
                )}

                <div className="card-actions">
                    <button
                        className="card-action-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Open menu
                        }}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </button>
                </div>
            </div>

            {/* Client Info */}
            <div className="card-client">
                <div className={`client-avatar ${deal.avatarColor || ''}`}>
                    {getInitials(deal.client.name)}
                </div>
                <div className="client-info">
                    <span className="client-name">{deal.client.name}</span>
                    <span className="client-contact">
                        <i className="fas fa-phone" /> {deal.client.phone}
                    </span>
                </div>
            </div>

            {/* Property Info */}
            <div className="card-property">
                <span className="property-name">{deal.property.investment}</span>
                <span className="property-unit">
                    {deal.property.unit} • {deal.property.area}m² • {deal.property.rooms} pok.
                </span>
            </div>

            {/* Value */}
            <div className={`card-value ${deal.isHighValue ? 'high' : ''}`}>
                <span className="value-amount">{formatCurrency(deal.value)}</span>
                {deal.pricePerM2 && (
                    <span className="value-per-m2">{formatCurrency(deal.pricePerM2)}/m²</span>
                )}
            </div>

            {/* Notes (if any) */}
            {deal.notes && (
                <div className="card-notes">
                    <i className="fas fa-sticky-note" />
                    <span>{deal.notes}</span>
                </div>
            )}

            {/* Payment Progress (for contracts) */}
            {deal.paymentProgress !== undefined && (
                <div className="card-payment">
                    <div className="payment-progress">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${deal.paymentProgress}%` }}
                            />
                        </div>
                        <span className="progress-text">
                            {deal.paymentProgress}% wpłacono ({formatCurrency(deal.paidAmount)})
                        </span>
                    </div>
                </div>
            )}

            {/* Activity */}
            <div className={`card-activity ${deal.activity?.className || 'has-activity'}`}>
                <i className={`fas fa-${deal.activity?.icon || 'clock'}`} />
                <span>{deal.activity?.text || 'Brak zaplanowanej aktywności'}</span>
            </div>

            {/* Card Footer */}
            <div className="card-footer">
                <div className={`card-age ${getAgeClassName()}`}>
                    <i className="fas fa-clock" /> {deal.daysInStage} dni
                </div>

                {deal.lastContact && (
                    <div className={`card-last-contact ${deal.lastContactDanger ? 'danger' : ''}`}>
                        <i className="fas fa-comment" /> {deal.lastContact}
                    </div>
                )}

                {deal.advisor && (
                    <div className="card-advisor">
                        <img
                            src={deal.advisor.avatar || `https://via.placeholder.com/24x24`}
                            alt={deal.advisor.name}
                            title={deal.advisor.name}
                        />
                    </div>
                )}
            </div>

            {/* Quick Actions */}
            <QuickActions
                visible={showQuickActions}
                dealId={deal.id}
                onAction={onQuickAction}
                stage={deal.stage}
            />
        </div>
    );
};

// ============================================
// QUICK ACTIONS
// ============================================

export const QuickActions = ({ visible, dealId, onAction, stage }) => {
    const getActions = () => {
        const baseActions = [
            { icon: 'phone', title: 'Zadzwoń', action: 'call' },
            { icon: 'envelope', title: 'Wyślij email', action: 'email' },
            { icon: 'calendar-plus', title: 'Zaplanuj', action: 'schedule' },
            { icon: 'sticky-note', title: 'Notatka', action: 'note' },
        ];

        // Dodatkowe akcje dla konkretnych etapów
        if (stage === 'reservation' || stage === 'contract') {
            baseActions[2] = { icon: 'file-contract', title: 'Generuj umowę', action: 'contract' };
        }

        if (stage === 'contract' || stage === 'realization') {
            baseActions[3] = { icon: 'folder', title: 'Dokumenty', action: 'documents' };
        }

        return baseActions;
    };

    return (
        <div className={`quick-actions ${visible ? 'visible' : ''}`}>
            {getActions().map((action, index) => (
                <button
                    key={index}
                    className="qa-btn"
                    title={action.title}
                    onClick={(e) => {
                        e.stopPropagation();
                        onAction?.(dealId, action.action);
                    }}
                >
                    <i className={`fas fa-${action.icon}`} />
                </button>
            ))}
        </div>
    );
};

// ============================================
// FILTER BAR
// ============================================

export const FilterBar = ({ filters, onFilterChange, onSearch, onClear }) => {
    const [localFilters, setLocalFilters] = useState(filters || {});

    const handleChange = (key, value) => {
        const newFilters = { ...localFilters, [key]: value };
        setLocalFilters(newFilters);
        onFilterChange?.(newFilters);
    };

    return (
        <div className="filters-bar">
            <div className="filters-left">
                {/* Filtr: Inwestycja */}
                <div className="filter-group">
                    <label>Inwestycja</label>
                    <select
                        className="filter-select"
                        value={localFilters.investment || ''}
                        onChange={(e) => handleChange('investment', e.target.value)}
                    >
                        <option value="">Wszystkie inwestycje</option>
                        <option value="1">Osiedle Parkowe</option>
                        <option value="2">Apartamenty Centrum</option>
                        <option value="3">Villa Nova</option>
                        <option value="4">Rezydencja Zielona</option>
                    </select>
                </div>

                {/* Filtr: Doradca */}
                <div className="filter-group">
                    <label>Doradca</label>
                    <select
                        className="filter-select"
                        value={localFilters.advisor || 'me'}
                        onChange={(e) => handleChange('advisor', e.target.value)}
                    >
                        <option value="">Wszyscy doradcy</option>
                        <option value="me">Moje deale</option>
                        <option value="1">Anna Kowalska</option>
                        <option value="2">Piotr Nowak</option>
                    </select>
                </div>

                {/* Filtr: Źródło */}
                <div className="filter-group">
                    <label>Źródło</label>
                    <select
                        className="filter-select"
                        value={localFilters.source || ''}
                        onChange={(e) => handleChange('source', e.target.value)}
                    >
                        <option value="">Wszystkie źródła</option>
                        <option value="www">Strona WWW</option>
                        <option value="otodom">Otodom</option>
                        <option value="rynek">Rynek Pierwotny</option>
                        <option value="facebook">Facebook</option>
                    </select>
                </div>

                {/* Filtr: Wartość */}
                <div className="filter-group">
                    <label>Wartość od</label>
                    <input
                        type="text"
                        className="filter-input"
                        placeholder="np. 300 000"
                        value={localFilters.valueFrom || ''}
                        onChange={(e) => handleChange('valueFrom', e.target.value)}
                    />
                </div>

                {/* Przycisk Szukaj */}
                <button className="btn btn-success" onClick={() => onSearch?.(localFilters)}>
                    <i className="fas fa-search" /> Szukaj
                </button>

                {/* Reset filtrów */}
                <button className="btn btn-text" onClick={() => {
                    setLocalFilters({});
                    onClear?.();
                }}>
                    <i className="fas fa-times" /> Wyczyść
                </button>
            </div>

            <div className="filters-right">
                <button className="btn btn-icon" title="Eksport PDF">
                    <i className="fas fa-file-pdf" />
                </button>
                <button className="btn btn-icon" title="Eksport Excel">
                    <i className="fas fa-file-excel" />
                </button>
                <div className="saved-views">
                    <button className="btn btn-outline">
                        <i className="fas fa-bookmark" /> Zapisane widoki
                        <i className="fas fa-chevron-down" />
                    </button>
                </div>
            </div>
        </div>
    );
};

// ============================================
// PIPELINE SUMMARY
// ============================================

export const PipelineSummary = ({ deals }) => {
    const totalValue = deals.reduce((sum, deal) => sum + deal.value, 0);
    const totalDeals = deals.length;
    const needsAttention = deals.filter(deal => deal.isRotting || deal.hasWarning).length;
    const hasActivityToday = deals.filter(deal => deal.activity?.isToday).length;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('pl-PL', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount) + ' zł';
    };

    return (
        <div className="pipeline-summary">
            <div className="summary-item">
                <span className="summary-label">Łączna wartość:</span>
                <span className="summary-value">{formatCurrency(totalValue)}</span>
            </div>
            <div className="summary-item">
                <span className="summary-label">Liczba deali:</span>
                <span className="summary-value">{totalDeals}</span>
            </div>
            <div className="summary-item warning">
                <span className="summary-label">
                    <i className="fas fa-exclamation-triangle" /> Wymagające uwagi:
                </span>
                <span className="summary-value">{needsAttention}</span>
            </div>
            <div className="summary-item success">
                <span className="summary-label">
                    <i className="fas fa-calendar-check" /> Z aktywnością dziś:
                </span>
                <span className="summary-value">{hasActivityToday}</span>
            </div>
        </div>
    );
};

// ============================================
// MAIN APP COMPONENT
// ============================================

export const KanbanApp = () => {
    const [deals, setDeals] = useState(MOCK_DEALS);
    const [filters, setFilters] = useState({});

    const handleDealMove = (dealId, newStage) => {
        setDeals(prevDeals =>
            prevDeals.map(deal =>
                deal.id === dealId ? { ...deal, stage: newStage } : deal
            )
        );
        console.log(`Deal ${dealId} moved to ${newStage}`);
    };

    const handleDealClick = (deal) => {
        console.log('Open deal:', deal);
    };

    const handleQuickAction = (dealId, action) => {
        console.log(`Quick action: ${action} for deal ${dealId}`);
    };

    const handleSearch = (filters) => {
        console.log('Search with filters:', filters);
        // Implement filtering logic
    };

    return (
        <div className="kanban-app">
            <FilterBar
                filters={filters}
                onFilterChange={setFilters}
                onSearch={handleSearch}
                onClear={() => setFilters({})}
            />

            <PipelineSummary deals={deals} />

            <KanbanBoard
                deals={deals}
                onDealMove={handleDealMove}
                onDealClick={handleDealClick}
                onQuickAction={handleQuickAction}
            />
        </div>
    );
};

// ============================================
// MOCK DATA
// ============================================

const MOCK_DEALS = [
    {
        id: 1,
        stage: 'new',
        source: 'www',
        client: { name: 'Anna Kowalczyk', phone: '512 345 678', email: 'a.kowalczyk@email.pl' },
        property: { investment: 'Osiedle Parkowe', unit: 'M12', area: 65, rooms: 3 },
        value: 485000,
        pricePerM2: 7462,
        daysInStage: 2,
        activity: { icon: 'phone', text: 'Zadzwonić dziś, 14:00', className: 'has-activity', isToday: true },
        advisor: { name: 'Jan Nowak', avatar: null },
        avatarColor: '',
    },
    {
        id: 2,
        stage: 'new',
        source: 'otodom',
        client: { name: 'Piotr Malinowski', phone: '601 234 567', email: 'p.malinowski@email.pl' },
        property: { investment: 'Apartamenty Centrum', unit: 'A24', area: 48, rooms: 2 },
        value: 520000,
        pricePerM2: 10833,
        daysInStage: 5,
        hasWarning: true,
        activity: { icon: 'exclamation-circle', text: 'Brak zaplanowanej aktywności', className: 'no-activity' },
        advisor: { name: 'Anna Kowalska', avatar: null },
        avatarColor: 'orange',
    },
    {
        id: 3,
        stage: 'contacted',
        source: 'rynek',
        client: { name: 'Marcin Nowicki', phone: '505 111 222', email: 'm.nowicki@email.pl' },
        property: { investment: 'Osiedle Parkowe', unit: 'M8', area: 72, rooms: 3 },
        value: 540000,
        pricePerM2: 7500,
        daysInStage: 8,
        badges: [{ type: 'sent', icon: 'paper-plane', title: 'Oferta wysłana' }],
        activity: { icon: 'eye', text: 'Oferta otwarta 3x', className: 'has-activity' },
        lastContact: '2 dni temu',
        avatarColor: 'green',
    },
    {
        id: 4,
        stage: 'contacted',
        source: 'www',
        client: { name: 'Tomasz Krawczyk', phone: '607 333 444', email: 't.krawczyk@email.pl' },
        property: { investment: 'Apartamenty Centrum', unit: 'B15', area: 55, rooms: 2 },
        value: 610000,
        pricePerM2: 11091,
        daysInStage: 21,
        isRotting: true,
        activity: { icon: 'exclamation-circle', text: 'Telefon przeterminowany!', className: 'overdue' },
        lastContact: '14 dni temu',
        lastContactDanger: true,
        avatarColor: 'red',
    },
    {
        id: 5,
        stage: 'negotiation',
        source: 'www',
        client: { name: 'Robert Brzeziński', phone: '600 123 456', email: 'r.brzezinski@email.pl' },
        property: { investment: 'Villa Nova', unit: 'D1', area: 180, rooms: 5 },
        value: 1450000,
        pricePerM2: 8056,
        daysInStage: 18,
        isHighValue: true,
        badges: [{ type: 'hot', icon: 'fire', title: 'Hot lead' }],
        notes: 'Prosi o rabat 5%, decyzja w tym tyg.',
        activity: { icon: 'phone', text: 'Zadzwonić dziś, 16:00', className: 'has-activity', isToday: true },
        lastContact: 'wczoraj',
        avatarColor: 'gold',
    },
    {
        id: 6,
        stage: 'reservation',
        source: 'www',
        client: { name: 'Jan Dąbrowski', phone: '508 444 555', email: 'j.dabrowski@email.pl' },
        property: { investment: 'Apartamenty Centrum', unit: 'C12', area: 68, rooms: 3 },
        value: 720000,
        pricePerM2: 10588,
        daysInStage: 5,
        isExpiring: true,
        expiringDays: 2,
        activity: { icon: 'file-signature', text: 'Podpisać umowę rezerwacyjną!', className: 'urgent' },
        avatarColor: 'purple',
    },
    {
        id: 7,
        stage: 'contract',
        source: 'www',
        client: { name: 'Paweł Zieliński', phone: '501 222 333', email: 'p.zielinski@email.pl' },
        property: { investment: 'Osiedle Parkowe', unit: 'M5', area: 75, rooms: 3 },
        value: 560000,
        pricePerM2: 7467,
        daysInStage: 30,
        isSuccess: true,
        badges: [{ type: 'signed', icon: 'file-signature', title: 'Umowa podpisana' }],
        paymentProgress: 35,
        paidAmount: 196000,
        activity: { icon: 'money-bill', text: 'Następna transza: 28.01.2026', className: 'has-activity' },
        avatarColor: 'green',
    },
];

export default KanbanApp;
