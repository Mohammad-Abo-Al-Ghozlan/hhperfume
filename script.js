// Perfume data
const perfumes = [
    {
        id: 1,
        name: "Lattafa Asad",
        brand: "Fragrance Profile",
        price: 22.99,
        size: "100ml",
        description: "Bold, warm, and masculine. Perfect for evenings/cold weather.",
        image: "images/asd.jpeg"
    },
    {
        id: 2,
        name: "Lattafa Yara Tous",
        brand: "Fragrance Profile",
        price: 22.99,
        size: "100ml",
        description: "Citrusy, nutty, sunny. Perfect for spring.",
        image: "images/yarayellow.jpeg"
    },
    {
        id: 3,
        name: "Lattafa Yara Moi",
        brand: "Fragrance Profile",
        price: 22.99,
        size: "100ml",
        description: "Citrusy, nutty, sunny. Perfect for spring.",
        image: "images/yara.jpeg"
    },
    {
        id: 4,
        name: "Lattafa Zanzibar",
        brand: "Fragrance Profile",
        price: 22.99,
        size: "100ml",
        description: "Fresh, tropical, unisex. Ideal for summer/daytime",
        image: "images/blue.jpeg"
    },
    {
        id: 5,
        name: "Lattafa Ana Abiyedh Rouge",
        brand: "Fragrance Profile",
        price: 20.99,
        size: "100ml",
        description: "Rich, gourmand, opulent. Bold evenings.",
        image: "images/analabyad.jpeg"
    },
    {
        id: 6,
        name: "Berries, whipped cream, musk.",
        brand: "Fragrance Profile",
        price: 22.99,
        size: "100ml",
        description: "Sweet, playful, feminine. Great for casual/day wear.",
        image: "images/pink.jpeg"
    },
    {
        id: 7,
        name: "Jasmine, sandalwood, white musk.",
        brand: "Fragrance Profile",
        price: 20.99,
        size: "100ml",
        description: "Clean, elegant, office-friendly.",
        image: "images/white.jpeg"
    },
    // {
    //     id: 8,
    //     name: "Amber Wood",
    //     brand: "Natural Elements",
    //     price: 85.00,
    //     size: "100ml",
    //     description: "Warm and comforting with amber, cedarwood, and vanilla for a cozy and inviting aura.",
    //     image: "https://cdn.pixabay.com/photo/2014/08/17/20/24/perfume-420174_1280.jpg"
    // }
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
                window.open(`https://wa.me/76939876?text=${encodedMessage}`, '_blank');
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
