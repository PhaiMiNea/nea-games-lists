// ============================================================
//  GAME DATA – ADD YOUR GAMES HERE
//  Tags are comma-separated strings – easy to copy/paste!
// ============================================================
const GAMES = [
    {
    title: 'JDM: Japanese Drift Master – Deluxe Edition + 3 DLCs',
    poster: 'https://i8.imageban.ru/out/2025/05/22/90cbf4a9271c6d6e631eb1a3c939c47e.jpg',
    size: '20 GB',
    date: '29/06/2026',
    tags: 'Driving, Racing, First-person, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/jdm-japanese-drift-master/'
},
    {
    title: 'Cities: Skylines II – Ultimate Edition + 19 DLCs',
    poster: 'https://i7.imageban.ru/out/2023/10/26/fdc5933d4e9c0bd013b2612ef7804156.jpg',
    size: '75.8 GB',
    date: '01/11/2025',
    tags: 'Managerial, Strategy, Isometric, 3D, Real-time',
    url: 'https://fitgirl-repacks.site/cities-skylines-2/'
},
    {
    title: 'Cities: Skylines – Collection + 90 DLCs/Bonuses',
    poster: 'https://i2.imageban.ru/out/2022/01/25/18041972c70cd19a11ac9c91d4574bce.jpg',
    size: '9.9 GB',
    date: '11/03/2026',
    tags: 'Managerial, Strategy, 3D, Real-time',
    url: 'https://fitgirl-repacks.site/cities-skylines-deluxe-edition/'
},
    {
    title: 'Euro Truck Simulator 2 + 103 DLCs',
    poster: 'https://i1.imageban.ru/out/2023/10/21/b40deca1731b010fe2cfaee4489bc40f.jpg',
    size: '32.3 GB',
    date: '29/11/2025',
    tags: 'Driving, Simulation, Open world, 3D',
    url: 'https://fitgirl-repacks.site/euro-truck-simulator-2/'
},
    {
    title: 'Dune: Awakening – Ultimate Edition',
    poster: 'https://i7.imageban.ru/out/2026/09/19/606f99d7476a3733ee3f696821ba2d7d.jpg',
    size: '36.6 GB',
    date: '19/09/2026',
    tags: 'Action, Survival, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/dune-awakening/'
},
    {
    title: 'BLACKWOOD: Supporter Edition',
    poster: 'https://i6.imageban.ru/out/2026/09/17/6b57217f92db2f4ca343f7bb91d220d9.jpg',
    size: '10.8 GB',
    date: '18/09/2026',
    tags: 'Action, Shooter, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/blackwood/'
},
    {
    title: 'Project Motor Racing',
    poster: 'https://i2.imageban.ru/out/2025/11/26/b1688939fafa9a22b14765b0e2d122dd.jpg',
    size: '26.4 GB',
    date: '27/06/2026',
    tags: 'Racing, Simulation, Physics-based, First-person, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/project-motor-racing/'
},
    {
    title: 'Halloween: The Game',
    poster: 'https://i6.imageban.ru/out/2026/09/06/21b35933e890d6edb75b8d5bcb46c84d.jpg',
    size: '28.2 GB',
    date: '06/09/2026',
    tags: 'Action, 3D, Horror',
    url: 'https://fitgirl-repacks.site/halloween-the-game/'
},
    {
    title: 'Bus Simulator 27',
    poster: 'https://i3.imageban.ru/out/2026/09/06/b5d03c6697c15d499790dda313cffb5b.jpg',
    size: '16.8 GB',
    date: '06/09/2026',
    tags: 'Driving, Simulation, First-person, Third-person, 3D, Buses',
    url: 'https://fitgirl-repacks.site/bus-simulator-27/'
},
    {
    title: 'Car Dealer Simulator',
    poster: 'https://i4.imageban.ru/out/2025/05/31/6058de8354458c261c696ef6662a9108.jpg',
    size: '16.9 GB',
    date: '05/08/2026',
    tags: 'Lifestyle, First-person, 3D',
    url: 'https://fitgirl-repacks.site/car-dealer-simulator/'
},
    {
    title: 'Indiana Jones and the Great Circle: Premium Edition',
    poster: 'https://i1.imageban.ru/out/2024/12/07/83438edd9b4c1e06e71b07928f3e8230.jpg',
    size: '125 GB',
    date: '07/09/2025',
    tags: 'Action, Puzzle, First-person, 3D',
    url: 'https://fitgirl-repacks.site/indiana-jones-and-the-great-circle/'
},
    {
    title: 'Samson',
    poster: 'https://i1.imageban.ru/out/2026/04/09/fe8dbdcf85584f18240a6c8a6ba2fe43.jpg',
    size: '11.1 GB',
    date: '09/04/2026',
    tags: 'Action, Driving, Open world, Beat, Third-person, 3D, Cars',
    url: 'https://fitgirl-repacks.site/samson/'
},
    {
    title: 'Spider-Man: Shattered Dimensions',
    poster: 'https://i89.fastpic.ru/big/2019/0725/28/b78738eaac8643c03aa1131a91665f28.jpg',
    size: '15.5 GB',
    date: '25/07/2019',
    tags: 'Action, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/spider-man-shattered-dimensions/'
},
    {
    title: 'The Thing That Happened',
    poster: 'https://i3.imageban.ru/out/2026/07/22/75899711525f946ab4cc0b4387a4c803.jpg',
    size: '18.3 GB',
    date: '22/07/2026',
    tags: 'Action, Shooter, Open world, Survival, Third-person, 3D, Post-apocalypse, Science fiction, Zombies',
    url: 'https://fitgirl-repacks.site/the-thing-that-happened/'
},
    {
    title: 'Tokyo Xtreme Racer',
    poster: 'https://i8.imageban.ru/out/2025/09/26/1be558726bdcc590b5eb59ef5210f38e.jpg',
    size: '9.5 GB',
    date: '26/09/2025',
    tags: 'Arcade, Racing, First-person, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/tokyo-xtreme-racer/'
},
    {
    title: 'RIDE 6',
    poster: 'https://i1.imageban.ru/out/2026/02/14/fe0fa6dc0a68401e5038d7119fa3bc82.jpg',
    size: '51 GB',
    date: '14/02/2026',
    tags: 'Racing, Simulation, Third-person, 3D, Motorcycles',
    url: 'https://fitgirl-repacks.site/ride-6/'
},
    {
    title: 'Marvel’s Spider-Man 2: Digital Deluxe Edition',
    poster: 'https://i1.imageban.ru/out/2025/02/01/ce3eb009b8bc0534e519a5c6e0dbcb48.jpg',
    size: '124.3 GB',
    date: '01/02/2025',
    tags: 'Action, Open world, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/marvels-spider-man-2/'
},
    {
    title: 'F1 22: Champions Edition',
    poster: 'https://i7.imageban.ru/out/2022/07/09/249373c6e7ca370b351a3d6c042635bf.jpg',
    size: '43.6 GB',
    date: '09/07/2022',
    tags: 'Racing, Simulation, Sports, First-person, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/f1-22-champions-edition/'
},
    {
    title: 'MotoGP 26',
    poster: 'https://i6.imageban.ru/out/2026/05/01/37b8f8ebfe0571c286a074f158922b2c.jpg',
    size: '27.2 GB',
    date: '01/05/2026',
    tags: 'Racing, Sports, Motorcycles, First-person, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/motogp-26/'
},
    {
    title: 'Forza Horizon 6',
    poster: 'https://i5.imageban.ru/out/2026/05/15/4da945133e2a51921f13d3f7b71cbbe6.jpg',
    size: '134.6 GB',
    date: '15/05/2026',
    tags: 'Arcade, Racing, Open world, First-person, Third-person, 3D, Cars',
    url: 'https://fitgirl-repacks.site/forza-horizon-6/'
},{
    title: 'The Blood of Dawnwalker: Eclipse Edition',
    poster: 'https://i6.imageban.ru/out/2026/09/03/2c0095bc253b1fdd3a9f8617334b3660.jpg',
    size: '48.7 GB',
    date: '03/09/2026',
    tags: 'RPG, Action RPG, Open world, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/the-blood-of-dawnwalker/'
}, {
    title: `Assassin's Creed: Black Flag Resynced – Deluxe Edition`,
    poster: 'https://i4.imageban.ru/out/2026/08/17/5a35e7ed76da8d2f68da097d233d555a.jpg',
    size: '51.4 GB',
    date: '16/08/2026',
    tags: 'Action, Open world, Stealth, Pirate/Privateer, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/assassins-creed-black-flag-resynced/'
}, {
    title: '007 First Light',
    poster: 'https://i1.imageban.ru/out/2026/06/10/b31a40b2f3ff14d02a41fa6842aca252.jpg',
    size: '49.5 GB',
    date: '24/07/2026',
    tags: 'Action, Stealth, Third-person, 3D, Spy fiction',
    url: 'https://fitgirl-repacks.site/007-first-light/'
}, {
    title: `Black Myth: Wukong – Digital Deluxe Edition`,
    poster: 'https://i5.imageban.ru/out/2026/04/28/d63200b742e9baad985aa04cfdb841e1.jpg',
    size: '140.8 GB',
    date: '28/04/2026',
    tags: 'RPG, Action RPG, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/black-myth-wukong/'
}, {
    title: `Star Wars Outlaws`,
    poster: 'https://i7.imageban.ru/out/2026/09/06/8678674bbb0e420767a44e62c271fcca.jpg',
    size: '74.4 GB',
    date: '06/09/2026',
    tags: 'Action, Open world, Stealth, Third-person, 3D',
    url: 'https://fitgirl-repacks.site/star-wars-outlaws/'
}];

// ============================================================
//  SORT GAMES BY DATE (LATEST FIRST) - HELPER FUNCTION
// ============================================================
function sortGamesByDate(games) {
    return [...games].sort((a, b) => {
        // Convert DD/MM/YYYY to Date object for comparison
        const dateA = a.date.split('/');
        const dateB = b.date.split('/');
        const dA = new Date(dateA[2], dateA[1] - 1, dateA[0]);
        const dB = new Date(dateB[2], dateB[1] - 1, dateB[0]);
        return dB - dA; // Latest first
    });
}

// Sort the GAMES array by date (latest first)
const SORTED_GAMES = sortGamesByDate(GAMES);

// Give every game a stable id (its index in SORTED_GAMES)
SORTED_GAMES.forEach((game, i) => game.id = i);

// Use SORTED_GAMES instead of GAMES everywhere
const GAMES_LIST = SORTED_GAMES;

// Selection state: array of game ids, in the order they were clicked.
let selectedIds = [];

// ============================================================
//  EXTRACT ALL YEARS AND TAGS
// ============================================================
function extractYears() {
    const years = new Set();
    GAMES_LIST.forEach(game => {
        const year = game.date.split('/')[2];
        if (year) years.add(year);
    });
    return Array.from(years).sort().reverse();
}

function extractTags() {
    const tags = new Set();
    GAMES_LIST.forEach(game => {
        const tagList = game.tags.split(',').map(t => t.trim());
        tagList.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
}

// ============================================================
//  FILTER FUNCTIONS
// ============================================================
function filterGames(searchTerm, year, tag) {
    return GAMES_LIST.filter(game => {
        const searchMatch = searchTerm === '' ||
            game.title.toLowerCase().includes(searchTerm.toLowerCase());

        const yearMatch = year === 'all' ||
            game.date.split('/')[2] === year;

        let tagMatch = tag === 'all';
        if (!tagMatch) {
            const gameTags = game.tags.split(',').map(t => t.trim().toLowerCase());
            tagMatch = gameTags.includes(tag.toLowerCase());
        }

        return searchMatch && yearMatch && tagMatch;
    });
}

// ============================================================
//  SELECTION HELPERS
// ============================================================
function toggleSelect(gameId) {
    const idx = selectedIds.indexOf(gameId);
    if (idx === -1) {
        selectedIds.push(gameId);
    } else {
        selectedIds.splice(idx, 1);
    }
    updateSelectionUI();
}

function removeSelection(gameId) {
    toggleSelect(gameId);
}

function clearSelection() {
    selectedIds = [];
    updateSelectionUI();
}

function updateSelectionUI() {
    const grid = document.getElementById('gamesGrid');
    grid.querySelectorAll('.game-card').forEach(card => {
        const gameId = parseInt(card.dataset.gameId, 10);
        const pos = selectedIds.indexOf(gameId);
        let badge = card.querySelector('.select-badge');

        if (pos !== -1) {
            card.classList.add('selected');
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'select-badge';
                card.prepend(badge);
            }
            badge.textContent = pos + 1;
        } else {
            card.classList.remove('selected');
            if (badge) badge.remove();
        }
    });

    renderSelectionPanel();
}

function parseSizeToGB(sizeStr) {
    const match = sizeStr.match(/([\d.]+)\s*(GB|MB|TB)/i);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    if (unit === 'MB') return value / 1024;
    if (unit === 'TB') return value * 1024;
    return value;
}

function getTotalSelectedSize() {
    const totalGB = selectedIds.reduce((sum, id) => {
        const game = GAMES_LIST.find(g => g.id === id);
        return sum + (game ? parseSizeToGB(game.size) : 0);
    }, 0);
    return totalGB;
}

function formatGB(totalGB) {
    if (totalGB >= 1024) {
        return (totalGB / 1024).toFixed(2) + ' TB';
    }
    return totalGB.toFixed(1) + ' GB';
}

function buildSelectionText() {
    if (selectedIds.length === 0) return '';

    const lines = selectedIds.map((gameId, i) => {
        const game = GAMES_LIST.find(g => g.id === gameId);
        if (!game) return '';
        return `${i + 1}. ${game.title} ${game.size}`;
    });

    lines.push('');
    lines.push(`- Total Games ${selectedIds.length}`);
    lines.push(`- Total Sizes: ${formatGB(getTotalSelectedSize())}`);

    return lines.join('\n');
}

function copySelectionToClipboard() {
    const text = buildSelectionText();
    if (!text) return;

    const btn = document.getElementById('copyBtn');
    const showCopied = () => {
        const original = btn.textContent;
        btn.textContent = '✅ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove('copied');
        }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showCopied).catch(() => fallbackCopy(text, showCopied));
    } else {
        fallbackCopy(text, showCopied);
    }
}

function fallbackCopy(text, onDone) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        document.execCommand('copy');
        if (onDone) onDone();
    } catch (err) {
        console.error('Copy failed:', err);
    }
    document.body.removeChild(textarea);
}

// ============================================================
//  RENDER FUNCTION
// ============================================================
let lastFilteredGames = GAMES_LIST;

function getCurrentFiltered() {
    return lastFilteredGames;
}

function renderGames(filteredGames) {
    lastFilteredGames = filteredGames;
    const grid = document.getElementById('gamesGrid');

    if (filteredGames.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <span class="icon">🔍</span>
                <h3>No Games Found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    let html = '';
    filteredGames.forEach((game, index) => {
        const posterHtml = game.poster
            ? `<img src="${game.poster}" alt="${game.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'no-image\\'>🎮</div>'">`
            : `<div class="no-image">🎮</div>`;

        const selectedPos = selectedIds.indexOf(game.id);
        const isSelected = selectedPos !== -1;
        const badgeHtml = isSelected
            ? `<div class="select-badge">${selectedPos + 1}</div>`
            : '';

        html += `
            <div class="game-card ${isSelected ? 'selected' : ''}" style="animation-delay: ${(index * 0.05)}s" data-game-id="${game.id}">
                ${badgeHtml}
                <div class="poster-container">
                    ${posterHtml}
                </div>
                <div class="card-body">
                    <div class="game-title">${game.title}</div>
                    <div class="game-size">${game.size}</div>
                    <div class="game-date">${game.date}</div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
    document.getElementById('resultsCount').innerHTML = `Showing <strong>${filteredGames.length}</strong> games`;

    grid.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const gameId = parseInt(card.dataset.gameId, 10);
            toggleSelect(gameId);
        });
    });
}

// ============================================================
//  SELECTION PANEL RENDER
// ============================================================
function renderSelectionPanel() {
    const fabBadge = document.getElementById('fabBadge');
    const listEl = document.getElementById('selectionPanelList');
    const totalEl = document.getElementById('totalSizeDisplay');

    fabBadge.textContent = selectedIds.length;
    fabBadge.style.display = selectedIds.length > 0 ? 'flex' : 'none';

    if (selectedIds.length === 0) {
        listEl.innerHTML = `<div class="selection-empty">No games selected yet</div>`;
    } else {
        let html = '';
        selectedIds.forEach((gameId, i) => {
            const game = GAMES_LIST.find(g => g.id === gameId);
            if (!game) return;
            html += `
                <div class="selection-item">
                    <div class="sel-number">${i + 1}</div>
                    <div class="sel-info">
                        <div class="sel-title">${game.title}</div>
                        <div class="sel-size">${game.size}</div>
                    </div>
                    <button class="sel-remove" data-game-id="${game.id}" aria-label="Remove">✕</button>
                </div>
            `;
        });
        listEl.innerHTML = html;

        listEl.querySelectorAll('.sel-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeSelection(parseInt(btn.dataset.gameId, 10));
            });
        });
    }

    totalEl.textContent = formatGB(getTotalSelectedSize());
}

// ============================================================
//  UPDATE FILTERS
// ============================================================
function updateFilters() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const year = document.getElementById('yearFilter').value;
    const tag = document.getElementById('tagFilter').value;

    const filtered = filterGames(searchTerm, year, tag);
    renderGames(filtered);
}

// ============================================================
//  POPULATE FILTER DROPDOWNS
// ============================================================
function populateFilters() {
    const yearSelect = document.getElementById('yearFilter');
    const years = extractYears();
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });

    const tagSelect = document.getElementById('tagFilter');
    const tags = extractTags();
    tags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagSelect.appendChild(option);
    });
}

// ============================================================
//  SELECTION PANEL TOGGLE
// ============================================================
function initSelectionPanel() {
    const fab = document.getElementById('selectionFab');
    const panel = document.getElementById('selectionPanel');
    const closeBtn = document.getElementById('panelCloseBtn');

    fab.addEventListener('click', () => {
        panel.classList.toggle('open');
    });

    closeBtn.addEventListener('click', () => {
        panel.classList.remove('open');
    });

    document.getElementById('panelClearBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        clearSelection();
    });

    document.getElementById('copyBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        copySelectionToClipboard();
    });

    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && !fab.contains(e.target)) {
            panel.classList.remove('open');
        }
    });
}

// ============================================================
//  INIT
// ============================================================
function init() {
    populateFilters();

    document.getElementById('totalCount').textContent = `${GAMES_LIST.length} games`;

    updateFilters();
    renderSelectionPanel();
    initSelectionPanel();

    document.getElementById('searchInput').addEventListener('input', updateFilters);
    document.getElementById('yearFilter').addEventListener('change', updateFilters);
    document.getElementById('tagFilter').addEventListener('change', updateFilters);
    document.getElementById('clearBtn').addEventListener('click', function() {
        document.getElementById('searchInput').value = '';
        document.getElementById('yearFilter').value = 'all';
        document.getElementById('tagFilter').value = 'all';
        updateFilters();
    });
}

// Run
init();
