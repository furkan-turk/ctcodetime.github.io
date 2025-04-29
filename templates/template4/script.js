// SEPET İŞLEMLERİ
let cart = [];

const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.close-cart');
const addToCartBtn = document.querySelector('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total span');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.querySelector('.checkout-btn');
const paymentModal = document.querySelector('.payment-modal');
const closePayment = document.querySelector('.close-payment');

// Sepet aç/kapa
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Ürün ekleme
addToCartBtn.addEventListener('click', () => {
    const product = {
        name: "Premium Akıllı Saat",
        price: 1299.99
    };
    cart.push(product);
    updateCart();
});

// Sepeti güncelle
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>₺${item.price.toFixed(2)}</span>
            <button class="remove-item" data-index="${index}">×</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    
    // Çıkarma butonları
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.splice(btn.dataset.index, 1);
            updateCart();
        });
    });
    
    cartTotal.textContent = `₺${total.toFixed(2)}`;
    cartCount.textContent = cart.length;
}

// Ödeme sayfası
checkoutBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
    paymentModal.style.display = 'flex';
});

closePayment.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// Form gönderimi
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ödeme başarıyla tamamlandı!');
    paymentModal.style.display = 'none';
    cart = [];
    updateCart();
});