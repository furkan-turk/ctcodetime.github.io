document.addEventListener('DOMContentLoaded', () => {

    const products = [
        { id: 1, name: "Wireless Headphones", price: 59.99, image: "https://via.placeholder.com/200" },
        { id: 2, name: "Smart Watch", price: 79.99, image: "https://via.placeholder.com/200" },
        { id: 3, name: "Gaming Mouse", price: 29.99, image: "https://via.placeholder.com/200" },
        { id: 4, name: "Bluetooth Speaker", price: 49.99, image: "https://via.placeholder.com/200" },
        { id: 5, name: "Portable Charger", price: 39.99, image: "https://via.placeholder.com/200" }
    ];

    const cart = [];

    const productsContainer = document.getElementById('products');
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Display products
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
        productsContainer.appendChild(div);
    });

    // Add to cart
    window.addToCart = function (id) {
        const product = products.find(prod => prod.id === id);
        cart.push(product);
        updateCart();
    }

    // Update cart
    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.innerHTML = `
          <p>${item.name} - $${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        `;
            cartItems.appendChild(div);
        });
    }

    // Remove from cart
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Open cart
    cartBtn.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
    });

    // Close cart
    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    // Checkout
    checkoutBtn.addEventListener('click', () => {
        alert('Proceeding to payment...');
    });

});
