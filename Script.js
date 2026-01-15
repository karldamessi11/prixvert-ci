// Données des produits agricoles
const productsData = [
    {
        id: 1,
        name: "Cacao",
        price: 1500,
        market: "Abidjan",
        date: "2023-06-15",
        trend: "up",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Café",
        price: 1200,
        market: "Yamoussoukro",
        date: "2023-06-15",
        trend: "stable",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w-800&q=80"
    },
    {
        id: 3,
        name: "Banane",
        price: 500,
        market: "Bouaké",
        date: "2023-06-15",
        trend: "down",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Ananas",
        price: 700,
        market: "San Pedro",
        date: "2023-06-15",
        trend: "up",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Manioc",
        price: 300,
        market: "Daloa",
        date: "2023-06-15",
        trend: "stable",
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Riz",
        price: 600,
        market: "Man",
        date: "2023-06-15",
        trend: "down",
        image: "https://images.unsplash.com/photo-1592924633733-cd7e5dab2a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
];

// Données de comparaison
const comparisonData = {
    "cacao": {
        "abidjan": 1500,
        "yamoussoukro": 1450,
        "bouake": 1480,
        "sanpedro": 1520,
        "daloa": 1470
    },
    "cafe": {
        "abidjan": 1200,
        "yamoussoukro": 1150,
        "bouake": 1180,
        "sanpedro": 1220,
        "daloa": 1170
    },
    "banane": {
        "abidjan": 500,
        "yamoussoukro": 480,
        "bouake": 490,
        "sanpedro": 520,
        "daloa": 470
    },
    "ananas": {
        "abidjan": 700,
        "yamoussoukro": 680,
        "bouake": 690,
        "sanpedro": 720,
        "daloa": 670
    },
    "riz": {
        "abidjan": 600,
        "yamoussoukro": 580,
        "bouake": 590,
        "sanpedro": 620,
        "daloa": 570
    }
};

// Fonction pour afficher les produits
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) {
        console.error("Element #productsGrid non trouvé!");
        return;
    }
    
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <h3 style="color: #8D6E63;">Aucun produit trouvé</h3>
                <p>Essayez avec d'autres filtres</p>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        let trendText, trendClass;
        switch(product.trend) {
            case 'up': trendText = 'En hausse'; trendClass = 'trend-up'; break;
            case 'down': trendText = 'En baisse'; trendClass = 'trend-down'; break;
            default: trendText = 'Stable'; trendClass = 'trend-stable';
        }
        
        const dateObj = new Date(product.date);
        const formattedDate = dateObj.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price.toLocaleString()} FCFA/kg</div>
                <div class="product-market">
                    <i class="fas fa-map-marker-alt"></i> ${product.market}
                </div>
                <div class="product-date">
                    <i class="far fa-calendar-alt"></i> ${formattedDate}
                </div>
                <span class="product-trend ${trendClass}">
                    <i class="fas ${product.trend === 'up' ? 'fa-arrow-up' : product.trend === 'down' ? 'fa-arrow-down' : 'fa-minus'}"></i>
                    ${trendText}
                </span>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Fonction pour filtrer
function filterProducts() {
    const productFilter = document.getElementById('productSelect').value;
    const marketFilter = document.getElementById('marketSelect').value;
    
    let filtered = productsData;
    
    if (productFilter !== 'all') {
        filtered = filtered.filter(p => 
            p.name.toLowerCase() === productFilter.toLowerCase()
        );
    }
    
    if (marketFilter !== 'all') {
        filtered = filtered.filter(p => 
            p.market.toLowerCase().includes(marketFilter.toLowerCase())
        );
    }
    
    displayProducts(filtered);
}

// Fonction pour comparer
function comparePrices() {
    const product = document.getElementById('compareProduct').value;
    const market1 = document.getElementById('compareMarket1').value;
    const market2 = document.getElementById('compareMarket2').value;
    
    if (market1 === market2) {
        alert("Veuillez choisir deux marchés différents");
        return;
    }
    
    const price1 = comparisonData[product]?.[market1] || 0;
    const price2 = comparisonData[product]?.[market2] || 0;
    const difference = price1 - price2;
    const percent = ((difference / price2) * 100).toFixed(1);
    
    const marketNames = {
        "abidjan": "Abidjan",
        "yamoussoukro": "Yamoussoukro",
        "bouake": "Bouaké",
        "sanpedro": "San Pedro",
        "daloa": "Daloa"
    };
    
    const productNames = {
        "cacao": "Cacao",
        "cafe": "Café",
        "banane": "Banane",
        "ananas": "Ananas",
        "riz": "Riz"
    };
    
    const results = document.getElementById('comparisonResults');
    results.innerHTML = `
        <div class="comparison-card">
            <h3>${marketNames[market1]}</h3>
            <div class="comparison-price">${price1.toLocaleString()} FCFA</div>
            <p>${productNames[product]}</p>
        </div>
        <div class="comparison-card">
            <h3>Différence</h3>
            <div class="comparison-price ${difference >= 0 ? 'positive' : 'negative'}">
                ${difference >= 0 ? '+' : ''}${difference.toLocaleString()} FCFA
            </div>
            <div>(${difference >= 0 ? '+' : ''}${percent}%)</div>
            <p>${difference >= 0 ? 'Plus cher' : 'Moins cher'} à ${marketNames[market1]}</p>
        </div>
        <div class="comparison-card">
            <h3>${marketNames[market2]}</h3>
            <div class="comparison-price">${price2.toLocaleString()} FCFA</div>
            <p>${productNames[product]}</p>
        </div>
    `;
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page chargée - initialisation...");
    
    // Afficher les produits
    displayProducts(productsData);
    
    // Événements
    document.getElementById('applyFilter')?.addEventListener('click', filterProducts);
    document.getElementById('resetFilter')?.addEventListener('click', function() {
        document.getElementById('productSelect').value = 'all';
        document.getElementById('marketSelect').value = 'all';
        displayProducts(productsData);
    });
    
    document.getElementById('compareButton')?.addEventListener('click', comparePrices);
    
    // Menu mobile
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Initialiser comparaison
    comparePrices();
    
    console.log("Initialisation terminée");
});
