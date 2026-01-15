// Données des produits agricoles
const productsData = [
    {
        id: 1,
        name: "Cacao",
        price: 1500,
        market: "Abidjan",
        date: "2023-06-15",
        trend: "up",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 2,
        name: "Café",
        price: 1200,
        market: "Yamoussoukro",
        date: "2023-06-15",
        trend: "stable",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 3,
        name: "Banane",
        price: 500,
        market: "Bouaké",
        date: "2023-06-15",
        trend: "down",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
    },
    {
        id: 4,
        name: "Ananas",
        price: 700,
        market: "San Pedro",
        date: "2023-06-14",
        trend: "up",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 5,
        name: "Manioc",
        price: 300,
        market: "Daloa",
        date: "2023-06-14",
        trend: "stable",
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1429&q=80"
    },
    {
        id: 6,
        name: "Riz",
        price: 600,
        market: "Man",
        date: "2023-06-15",
        trend: "down",
        image: "https://images.unsplash.com/photo-1592924633733-cd7e5dab2a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 7,
        name: "Maïs",
        price: 450,
        market: "Korhogo",
        date: "2023-06-13",
        trend: "up",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 8,
        name: "Igname",
        price: 800,
        market: "Abidjan",
        date: "2023-06-15",
        trend: "stable",
        image: "https://images.unsplash.com/photo-1592924738088-5d6d0f5f3f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
];

// Données de comparaison pour différents marchés
const comparisonData = {
    "cacao": {
        "abidjan": 1500,
        "yamoussoukro": 1450,
        "bouake": 1480,
        "sanpedro": 1520,
        "daloa": 1470,
        "man": 1490,
        "korhogo": 1460
    },
    "cafe": {
        "abidjan": 1200,
        "yamoussoukro": 1150,
        "bouake": 1180,
        "sanpedro": 1220,
        "daloa": 1170,
        "man": 1190,
        "korhogo": 1160
    },
    "banane": {
        "abidjan": 500,
        "yamoussoukro": 480,
        "bouake": 490,
        "sanpedro": 520,
        "daloa": 470,
        "man": 495,
        "korhogo": 485
    },
    "ananas": {
        "abidjan": 700,
        "yamoussoukro": 680,
        "bouake": 690,
        "sanpedro": 720,
        "daloa": 670,
        "man": 695,
        "korhogo": 685
    },
    "riz": {
        "abidjan": 600,
        "yamoussoukro": 580,
        "bouake": 590,
        "sanpedro": 620,
        "daloa": 570,
        "man": 595,
        "korhogo": 585
    }
};

// Fonction pour afficher les produits
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        // Déterminer la tendance
        let trendText, trendClass;
        switch(product.trend) {
            case 'up':
                trendText = 'En hausse';
                trendClass = 'trend-up';
                break;
            case 'down':
                trendText = 'En baisse';
                trendClass = 'trend-down';
                break;
            default:
                trendText = 'Stable';
                trendClass = 'trend-stable';
        }
        
        // Formater la date
        const dateObj = new Date(product.date);
        const formattedDate = dateObj.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        // Créer la carte produit
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price.toLocaleString()} FCFA/kg</div>
                <div class="product-market"><i class="fas fa-map-marker-alt"></i> Marché: ${product.market}</div>
                <div class="product-date"><i class="far fa-calendar-alt"></i> ${formattedDate}</div>
                <span class="product-trend ${trendClass}"><i class="fas ${product.trend === 'up' ? 'fa-arrow-up' : product.trend === 'down' ? 'fa-arrow-down' : 'fa-minus'}"></i> ${trendText}</span>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Fonction pour filtrer les produits
function filterProducts() {
    const productFilter = document.getElementById('productSelect').value;
    const marketFilter = document.getElementById('marketSelect').value;
    const dateFilter = document.getElementById('dateRange').value;
    
    let filteredProducts = productsData;
    
    // Filtrer par produit
    if (productFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase() === productFilter.toLowerCase()
        );
    }
    
    // Filtrer par marché
    if (marketFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.market.toLowerCase().includes(marketFilter.toLowerCase())
        );
    }
    
    // Filtrer par date (simplifié)
    if (dateFilter) {
        filteredProducts = filteredProducts.filter(product => 
            product.date === dateFilter
        );
    }
    
    // Si aucun produit ne correspond, afficher un message
    if (filteredProducts.length === 0) {
        document.getElementById('productsGrid').innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <h3 style="color: var(--earth-brown); margin-bottom: 15px;">Aucun produit trouvé avec ces critères</h3>
                <p>Essayez de modifier vos filtres pour voir plus de résultats.</p>
            </div>
        `;
    } else {
        displayProducts(filteredProducts);
    }
}

// Fonction pour comparer les prix
function comparePrices() {
    const product = document.getElementById('compareProduct').value;
    const market1 = document.getElementById('compareMarket1').value;
    const market2 = document.getElementById('compareMarket2').value;
    
    // Vérifier que les marchés sont différents
    if (market1 === market2) {
        alert("Veuillez sélectionner deux marchés différents pour la comparaison.");
        return;
    }
    
    // Obtenir les prix
    const price1 = comparisonData[product][market1];
    const price2 = comparisonData[product][market2];
    
    // Calculer la différence
    const difference = price1 - price2;
    const differencePercent = ((difference / price2) * 100).toFixed(1);
    
    // Formater les noms de produits et de marchés
    const productNames = {
        "cacao": "Cacao",
        "cafe": "Café",
        "banane": "Banane",
        "ananas": "Ananas",
        "riz": "Riz"
    };
    
    const marketNames = {
        "abidjan": "Abidjan",
        "yamoussoukro": "Yamoussoukro",
        "bouake": "Bouaké",
        "sanpedro": "San Pedro",
        "daloa": "Daloa",
        "man": "Man",
        "korhogo": "Korhogo"
    };
    
    // Mettre à jour l'affichage
    const comparisonResults = document.getElementById('comparisonResults');
    comparisonResults.innerHTML = `
        <div class="comparison-card">
            <h3>${marketNames[market1]}</h3>
            <div class="comparison-price">${price1.toLocaleString()} FCFA/kg</div>
            <p>Prix du ${productNames[product]} sur le marché de ${marketNames[market1]}</p>
        </div>
        
        <div class="comparison-card" style="display: flex; flex-direction: column; justify-content: center;">
            <h3>Différence</h3>
            <div class="comparison-price ${difference >= 0 ? 'positive' : 'negative'}">
                ${difference >= 0 ? '+' : ''}${difference.toLocaleString()} FCFA
            </div>
            <div class="price-difference ${difference >= 0 ? 'positive' : 'negative'}">
                (${difference >= 0 ? '+' : ''}${differencePercent}%)
            </div>
            <p>${difference >= 0 ? `Le prix est plus élevé à ${marketNames[market1]}` : `Le prix est plus bas à ${marketNames[market1]}`}</p>
        </div>
        
        <div class="comparison-card">
            <h3>${marketNames[market2]}</h3>
            <div class="comparison-price">${price2.toLocaleString()} FCFA/kg</div>
            <p>Prix du ${productNames[product]} sur le marché de ${marketNames[market2]}</p>
        </div>
    `;
}

// Fonction pour initialiser l'application
function initApp() {
    // Afficher tous les produits au chargement
    displayProducts(productsData);
    
    // Configurer les événements
    document.getElementById('applyFilter').addEventListener('click', filterProducts);
    document.getElementById('resetFilter').addEventListener('click', function() {
        document.getElementById('productSelect').value = 'all';
        document.getElementById('marketSelect').value = 'all';
        document.getElementById('dateRange').value = '2023-06-15';
        displayProducts(productsData);
    });
    
    document.getElementById('compareButton').addEventListener('click', comparePrices);
    
    // Menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Fermer le menu mobile en cliquant sur un lien
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Initialiser la comparaison
    comparePrices();
    
    // Ajouter un défilement fluide pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Démarrer l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initApp);