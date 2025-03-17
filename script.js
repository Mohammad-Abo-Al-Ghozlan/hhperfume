// Perfume data
const perfumes = [
    {
        id: 1,
        name: "Midnight Rose",
        brand: "Elegance",
        price: 89.99,
        size: "50ml",
        description: "A captivating blend of rose, vanilla, and amber that creates a mysterious and alluring scent.",
        image: "https://cdn.pixabay.com/photo/2023/11/27/09/25/ai-generated-8414957_1280.png"
    },
    {
        id: 2,
        name: "Ocean Breeze",
        brand: "Aqua Luxe",
        price: 75.50,
        size: "100ml",
        description: "Fresh and invigorating with notes of sea salt, citrus, and cedar wood for a clean, crisp fragrance.",
        image: "https://cdn.pixabay.com/photo/2017/06/09/15/40/bottle-2387210_1280.jpg"
    },
    {
        id: 3,
        name: "Golden Oud",
        brand: "Royal Collection",
        price: 120.00,
        size: "75ml",
        description: "A rich and opulent fragrance featuring oud, saffron, and patchouli for a luxurious experience.",
        image: "https://cdn.pixabay.com/photo/2024/04/29/13/54/ai-generated-8727927_1280.jpg"
    },
    {
        id: 4,
        name: "Velvet Orchid",
        brand: "Floral Dreams",
        price: 95.00,
        size: "50ml",
        description: "An elegant composition of orchid, honey, and sandalwood creating a sophisticated feminine scent.",
        image: "https://cdn.pixabay.com/photo/2024/01/09/16/30/perfume-8497908_1280.jpg"
    },
    {
        id: 5,
        name: "Citrus Explosion",
        brand: "Fresh Vibes",
        price: 65.99,
        size: "100ml",
        description: "Energizing blend of lemon, bergamot, and grapefruit for a refreshing daytime fragrance.",
        image: "https://cdn.pixabay.com/photo/2024/05/09/21/47/ai-generated-8751912_1280.png"
    },
    {
        id: 6,
        name: "Noir Intense",
        brand: "Midnight Collection",
        price: 110.00,
        size: "75ml",
        description: "A bold and sophisticated fragrance with notes of black pepper, leather, and tobacco.",
        image: "https://cdn.pixabay.com/photo/2019/04/23/06/10/perfume-4148638_1280.jpg"
    },
    {
        id: 7,
        name: "Cherry Blossom",
        brand: "Spring Essence",
        price: 79.99,
        size: "50ml",
        description: "A delicate and romantic scent featuring cherry blossom, peony, and white musk.",
        image: "https://cdn.pixabay.com/photo/2019/11/29/10/03/perfume-4660970_1280.jpg"
    },
    {
        id: 8,
        name: "Amber Wood",
        brand: "Natural Elements",
        price: 85.00,
        size: "100ml",
        description: "Warm and comforting with amber, cedarwood, and vanilla for a cozy and inviting aura.",
        image: "https://cdn.pixabay.com/photo/2014/08/17/20/24/perfume-420174_1280.jpg"
    }
];

// Function to format price with 2 decimal places
function formatPrice(price) {
    return price.toFixed(2);
}

// Function to create perfume cards
function createPerfumeCards() {
    const perfumeGrid = document.getElementById('perfume-grid');
    
    perfumes.forEach(perfume => {
        const card = document.createElement('div');
        card.className = 'perfume-card';
        
        card.innerHTML = `
            <img src="${perfume.image}" alt="${perfume.name}" class="perfume-image">
            <div class="perfume-details">
                <div class="perfume-header">
                    <div class="perfume-title">
                        <h3>${perfume.name}</h3>
                        <p>${perfume.brand}</p>
                    </div>
                    <span class="perfume-size">${perfume.size}</span>
                </div>
                <p class="perfume-description">${perfume.description}</p>
                <div class="perfume-footer">
                    <p class="perfume-price">$${formatPrice(perfume.price)}</p>
                    <button class="whatsapp-button" data-id="${perfume.id}">
                        <i class="fab fa-whatsapp"></i> Order via WhatsApp
                    </button>
                </div>
            </div>
        `;
        
        perfumeGrid.appendChild(card);
    });
}

// Function to handle WhatsApp button click
function setupWhatsAppButtons() {
    const buttons = document.querySelectorAll('.whatsapp-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const perfumeId = parseInt(this.getAttribute('data-id'));
            const perfume = perfumes.find(p => p.id === perfumeId);
            
            if (perfume) {
                // Replace with your actual WhatsApp number
                const phoneNumber = "1234567890";
                
                // Create the message with product details
                const message = `Hello, I'm interested in purchasing:\n\n*${perfume.name}*\n${perfume.brand} - ${perfume.size}\nPrice: $${formatPrice(perfume.price)}\n\n${perfume.image}`;
                
                // Encode the message for URL
                const encodedMessage = encodeURIComponent(message);
                
                // Open WhatsApp with the pre-filled message
                window.open(`https://wa.me/81985614?text=${encodedMessage}`, '_blank');
            }
        });
    });
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createPerfumeCards();
    setupWhatsAppButtons();
    setCurrentYear();
});