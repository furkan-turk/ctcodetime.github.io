document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartBtn = document.getElementById("cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const closeCart = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    cartBtn.addEventListener("click", () => {
        cartModal.classList.remove("hidden");
    });

    closeCart.addEventListener("click", () => {
        cartModal.classList.add("hidden");
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.closest(".menu-item");
            const name = item.dataset.name;
            const price = Number(item.dataset.price);
            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - ₺${item.price} <button onclick="removeItem(${index})">❌</button>`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total;
        cartCount.textContent = cart.length;
    }

    window.removeItem = function (index) {
        cart.splice(index, 1);
        updateCart();
    };
});
