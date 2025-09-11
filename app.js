// Content data
const contentData = {
    "content": [
        {"id": 1, "title": "Stranger Things", "type": "series", "genre": "Sci-Fi", "year": 2016, "rating": "TV-14", "duration": "51m", "seasons": 4, "description": "Uma série sobrenatural ambientada nos anos 80.", "image": "https://images.unsplash.com/photo-1489599896549-b5830b09b38e?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "featured": true, "category": ["Netflix Originals", "Sci-Fi"]},
        {"id": 2, "title": "The Witcher", "type": "series", "genre": "Fantasy", "year": 2019, "rating": "TV-MA", "duration": "60m", "seasons": 3, "description": "Geralt de Rívia, um caçador de monstros.", "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", "category": ["Netflix Originals", "Fantasy"]},
        {"id": 3, "title": "Avengers: Endgame", "type": "movie", "genre": "Action", "year": 2019, "rating": "PG-13", "duration": "181m", "description": "A batalha final contra Thanos.", "image": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", "category": ["Action Movies", "Trending Now"]},
        {"id": 4, "title": "The Dark Knight", "type": "movie", "genre": "Action", "year": 2008, "rating": "PG-13", "duration": "152m", "description": "Batman enfrenta o Coringa em Gotham.", "image": "https://images.unsplash.com/photo-1531259736756-6caccf485f81?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", "category": ["Action Movies"]},
        {"id": 5, "title": "The Office", "type": "series", "genre": "Comedy", "year": 2005, "rating": "TV-14", "duration": "22m", "seasons": 9, "description": "Comédia sobre funcionários de escritório.", "image": "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", "category": ["Comedies"]},
        {"id": 6, "title": "Inception", "type": "movie", "genre": "Sci-Fi", "year": 2010, "rating": "PG-13", "duration": "148m", "description": "Dom Cobb explora o mundo dos sonhos.", "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", "category": ["Sci-Fi", "Trending Now"]},
        {"id": 7, "title": "The Conjuring", "type": "movie", "genre": "Horror", "year": 2013, "rating": "R", "duration": "112m", "description": "Investigadores paranormais ajudam uma família.", "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", "category": ["Horror Movies"]},
        {"id": 8, "title": "Friends", "type": "series", "genre": "Comedy", "year": 1994, "rating": "TV-PG", "duration": "22m", "seasons": 10, "description": "Seis amigos navegam pela vida em Nova York.", "image": "https://images.unsplash.com/photo-1574170611216-0eba7c5a8e3b?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", "category": ["Comedies"]},
        {"id": 9, "title": "Black Mirror", "type": "series", "genre": "Sci-Fi", "year": 2011, "rating": "TV-MA", "duration": "60m", "seasons": 6, "description": "Antologia sobre tecnologia e sociedade.", "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", "category": ["Netflix Originals", "Sci-Fi"]},
        {"id": 10, "title": "Mad Max: Fury Road", "type": "movie", "genre": "Action", "year": 2015, "rating": "R", "duration": "120m", "description": "Perseguição no deserto pós-apocalíptico.", "image": "https://images.unsplash.com/photo-1594736797933-d0dcbf652b4b?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", "category": ["Action Movies", "Trending Now"]},
        {"id": 11, "title": "It", "type": "movie", "genre": "Horror", "year": 2017, "rating": "R", "duration": "135m", "description": "Crianças enfrentam um palhaço demoníaco.", "image": "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4", "category": ["Horror Movies"]},
        {"id": 12, "title": "Breaking Bad", "type": "series", "genre": "Drama", "year": 2008, "rating": "TV-MA", "duration": "47m", "seasons": 5, "description": "Professor de química vira traficante.", "image": "https://images.unsplash.com/photo-1489599896549-b5830b09b38e?w=300&h=450", "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4", "category": ["Drama", "Trending Now"]}
    ]
};

// Global variables
let myList = [];
let currentContent = null;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('App initializing...');
    initializeApp();
});

function initializeApp() {
    // Load content into sliders
    loadContentSliders();
    
    // Setup hero section
    setupHeroSection();
    
    // Setup event listeners
    setupEventListeners();
    
    // Handle scroll effects
    handleScrollEffects();
    
    // Load My List from storage (non-localStorage fallback)
    loadMyListFromMemory();
    
    console.log('App initialized successfully');
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Nav clicked:', e.target.dataset.section);
            handleNavigation(e);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Search enter pressed');
                handleSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Search button clicked');
            handleSearch();
        });
    }
    
    // Modal controls
    const videoModal = document.getElementById('videoModal');
    const modalClose = document.getElementById('modalClose');
    
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Modal close clicked');
            closeModal();
        });
    }
    
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeModal();
            }
        });
    }
    
    // Hero buttons
    const heroPlayBtn = document.getElementById('heroPlayBtn');
    const heroListBtn = document.getElementById('heroListBtn');
    
    if (heroPlayBtn) {
        heroPlayBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hero play button clicked');
            const featuredContent = contentData.content.find(item => item.featured);
            if (featuredContent) {
                openVideoModal(featuredContent);
            }
        });
    }
    
    if (heroListBtn) {
        heroListBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hero list button clicked');
            const featuredContent = contentData.content.find(item => item.featured);
            if (featuredContent) {
                toggleMyList(featuredContent);
                updateHeroListButton();
            }
        });
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const videoModal = document.getElementById('videoModal');
            if (videoModal && !videoModal.classList.contains('hidden')) {
                closeModal();
            }
        }
    });
    
    console.log('Event listeners setup complete');
}

function loadContentSliders() {
    console.log('Loading content sliders...');
    
    // Trending Now
    const trendingContent = contentData.content.filter(item => 
        item.category && item.category.includes('Trending Now')
    );
    populateSlider('trendingSlider', trendingContent);
    
    // Netflix Originals
    const originalsContent = contentData.content.filter(item => 
        item.category && item.category.includes('Netflix Originals')
    );
    populateSlider('originalsSlider', originalsContent);
    
    // Action Movies
    const actionContent = contentData.content.filter(item => 
        item.category && item.category.includes('Action Movies')
    );
    populateSlider('actionSlider', actionContent);
    
    // Comedies
    const comedyContent = contentData.content.filter(item => 
        item.category && item.category.includes('Comedies')
    );
    populateSlider('comedySlider', comedyContent);
    
    // Horror Movies
    const horrorContent = contentData.content.filter(item => 
        item.category && item.category.includes('Horror Movies')
    );
    populateSlider('horrorSlider', horrorContent);
    
    console.log('Content sliders loaded');
}

function populateSlider(sliderId, content) {
    const slider = document.getElementById(sliderId);
    if (!slider) {
        console.log('Slider not found:', sliderId);
        return;
    }
    
    slider.innerHTML = '';
    
    content.forEach(item => {
        const card = createContentCard(item);
        slider.appendChild(card);
    });
    
    console.log(`Populated ${sliderId} with ${content.length} items`);
}

function createContentCard(item) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.dataset.id = item.id;
    
    const isInList = isInMyList(item.id);
    const listButtonText = isInList ? '✓' : '+';
    const listButtonClass = isInList ? 'card-btn list-btn in-list' : 'card-btn list-btn';
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="card-overlay">
            <div class="card-title">${item.title}</div>
            <div class="card-info">${item.year} • ${item.rating} • ${item.duration}</div>
            <div class="card-actions">
                <button class="card-btn play-btn">▶</button>
                <button class="${listButtonClass}">${listButtonText}</button>
            </div>
        </div>
    `;
    
    // Add event listeners to the card buttons
    const playBtn = card.querySelector('.play-btn');
    const listBtn = card.querySelector('.list-btn');
    
    if (playBtn) {
        playBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Play button clicked for:', item.title);
            openVideoModal(item);
        });
    }
    
    if (listBtn) {
        listBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('List button clicked for:', item.title);
            toggleMyList(item);
            updateCardListButton(listBtn, item.id);
            updateHeroListButton();
        });
    }
    
    return card;
}

function updateCardListButton(button, itemId) {
    const isInList = isInMyList(itemId);
    button.textContent = isInList ? '✓' : '+';
    button.className = isInList ? 'card-btn list-btn in-list' : 'card-btn list-btn';
}

function setupHeroSection() {
    const featuredContent = contentData.content.find(item => item.featured);
    if (featuredContent) {
        updateHeroContent(featuredContent);
        updateHeroListButton();
    }
}

function updateHeroContent(content) {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroImg = document.querySelector('.hero-img');
    
    if (heroTitle) heroTitle.textContent = content.title;
    if (heroDescription) heroDescription.textContent = content.description;
    if (heroImg) {
        heroImg.src = content.image;
        heroImg.alt = content.title;
    }
}

function updateHeroListButton() {
    const featuredContent = contentData.content.find(item => item.featured);
    const heroListBtn = document.getElementById('heroListBtn');
    
    if (featuredContent && heroListBtn) {
        if (isInMyList(featuredContent.id)) {
            heroListBtn.textContent = '✓ Na Lista';
            heroListBtn.classList.add('in-list');
        } else {
            heroListBtn.textContent = '+ Minha Lista';
            heroListBtn.classList.remove('in-list');
        }
    }
}

function handleNavigation(e) {
    const section = e.target.dataset.section;
    console.log('Navigating to section:', section);
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
    
    // Hide all sections first
    hideAllSections();
    
    // Show appropriate sections
    switch(section) {
        case 'inicio':
            showHomeContent();
            break;
        case 'series':
            showSeriesContent();
            break;
        case 'filmes':
            showMoviesContent();
            break;
        case 'minha-lista':
            showMyListContent();
            break;
    }
}

function hideAllSections() {
    const allSections = document.querySelectorAll('.content-row');
    allSections.forEach(section => {
        section.classList.add('hidden');
    });
}

function showHomeContent() {
    console.log('Showing home content');
    const homeSectionIds = ['trendingSlider', 'originalsSlider', 'actionSlider', 'comedySlider', 'horrorSlider'];
    
    homeSectionIds.forEach(id => {
        const slider = document.getElementById(id);
        if (slider) {
            const section = slider.closest('.content-row');
            if (section) {
                section.classList.remove('hidden');
            }
        }
    });
}

function showSeriesContent() {
    console.log('Showing series content');
    const seriesContent = contentData.content.filter(item => item.type === 'series');
    displayFilteredContent('Séries', seriesContent);
}

function showMoviesContent() {
    console.log('Showing movies content');
    const moviesContent = contentData.content.filter(item => item.type === 'movie');
    displayFilteredContent('Filmes', moviesContent);
}

function showMyListContent() {
    console.log('Showing my list content, items:', myList.length);
    const myListSection = document.getElementById('myListSection');
    const myListSlider = document.getElementById('myListSlider');
    
    if (!myListSection || !myListSlider) return;
    
    myListSlider.innerHTML = '';
    
    if (myList.length === 0) {
        myListSlider.innerHTML = '<p style="color: rgba(255,255,255,0.7); padding: 20px; text-align: center; width: 100%;">Sua lista está vazia. Adicione alguns filmes e séries!</p>';
    } else {
        myList.forEach(item => {
            const card = createContentCard(item);
            myListSlider.appendChild(card);
        });
    }
    
    myListSection.classList.remove('hidden');
}

function displayFilteredContent(title, content) {
    console.log('Displaying filtered content:', title, content.length, 'items');
    const searchResults = document.getElementById('searchResults');
    const searchGrid = document.getElementById('searchGrid');
    const rowTitle = searchResults?.querySelector('.row-title');
    
    if (!searchResults || !searchGrid || !rowTitle) return;
    
    rowTitle.textContent = title;
    searchGrid.innerHTML = '';
    
    content.forEach(item => {
        const card = createContentCard(item);
        searchGrid.appendChild(card);
    });
    
    searchResults.classList.remove('hidden');
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.trim().toLowerCase();
    console.log('Searching for:', query);
    
    const searchResults = document.getElementById('searchResults');
    const searchGrid = document.getElementById('searchGrid');
    
    if (!searchResults || !searchGrid) return;
    
    if (query === '') {
        searchResults.classList.add('hidden');
        showHomeContent();
        return;
    }
    
    const results = contentData.content.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.genre.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
    
    console.log('Search results:', results.length);
    
    // Hide other sections and update nav
    hideAllSections();
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Show search results
    const rowTitle = searchResults.querySelector('.row-title');
    if (rowTitle) {
        rowTitle.textContent = `Resultados para "${searchInput.value}"`;
    }
    
    searchGrid.innerHTML = '';
    
    if (results.length === 0) {
        searchGrid.innerHTML = '<p style="color: rgba(255,255,255,0.7); padding: 20px; grid-column: 1 / -1; text-align: center;">Nenhum resultado encontrado.</p>';
    } else {
        results.forEach(item => {
            const card = createContentCard(item);
            searchGrid.appendChild(card);
        });
    }
    
    searchResults.classList.remove('hidden');
}

function openVideoModal(content) {
    console.log('Opening video modal for:', content.title);
    currentContent = content;
    
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (!videoModal || !videoPlayer) {
        console.error('Modal elements not found');
        return;
    }
    
    // Update modal content
    const videoTitle = document.getElementById('videoTitle');
    const videoYear = document.getElementById('videoYear');
    const videoRating = document.getElementById('videoRating');
    const videoDuration = document.getElementById('videoDuration');
    const videoDescription = document.getElementById('videoDescription');
    
    if (videoTitle) videoTitle.textContent = content.title;
    if (videoYear) videoYear.textContent = content.year;
    if (videoRating) videoRating.textContent = content.rating;
    if (videoDuration) videoDuration.textContent = content.duration;
    if (videoDescription) videoDescription.textContent = content.description;
    
    // Set video source
    const videoSource = videoPlayer.querySelector('source');
    if (videoSource) {
        videoSource.src = content.trailer;
        videoPlayer.load();
    }
    
    // Update modal buttons
    updateModalButtons();
    
    // Show modal
    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Setup modal button event listeners
    setupModalButtons();
}

function updateModalButtons() {
    if (!currentContent) return;
    
    const modalListBtn = document.getElementById('modalListBtn');
    
    if (modalListBtn) {
        if (isInMyList(currentContent.id)) {
            modalListBtn.textContent = '✓ Na Lista';
            modalListBtn.classList.add('in-list');
        } else {
            modalListBtn.textContent = '+ Minha Lista';
            modalListBtn.classList.remove('in-list');
        }
    }
}

function setupModalButtons() {
    const modalPlayBtn = document.getElementById('modalPlayBtn');
    const modalListBtn = document.getElementById('modalListBtn');
    
    if (modalPlayBtn) {
        // Remove existing listeners by cloning
        const newPlayBtn = modalPlayBtn.cloneNode(true);
        modalPlayBtn.parentNode.replaceChild(newPlayBtn, modalPlayBtn);
        
        newPlayBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Modal play button clicked');
            const videoPlayer = document.getElementById('videoPlayer');
            if (videoPlayer) {
                videoPlayer.play();
            }
        });
    }
    
    if (modalListBtn) {
        // Remove existing listeners by cloning
        const newListBtn = modalListBtn.cloneNode(true);
        modalListBtn.parentNode.replaceChild(newListBtn, modalListBtn);
        
        newListBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Modal list button clicked');
            if (currentContent) {
                toggleMyList(currentContent);
                updateModalButtons();
                updateHeroListButton();
            }
        });
    }
}

function closeModal() {
    console.log('Closing modal');
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoModal) {
        videoModal.classList.add('hidden');
    }
    
    if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
    
    document.body.style.overflow = 'auto';
    currentContent = null;
}

function toggleMyList(content) {
    console.log('Toggling my list for:', content.title);
    const existingIndex = myList.findIndex(item => item.id === content.id);
    
    if (existingIndex > -1) {
        myList.splice(existingIndex, 1);
        console.log('Removed from list');
    } else {
        myList.push(content);
        console.log('Added to list');
    }
    
    console.log('My list now has', myList.length, 'items');
}

function isInMyList(contentId) {
    return myList.some(item => item.id === contentId);
}

function loadMyListFromMemory() {
    // Since localStorage is not available, we'll start with an empty list
    myList = [];
    console.log('My list initialized (memory only)');
}

function handleScrollEffects() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Header background effect
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}