// Ambil cart dari localStorage
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let cartList = document.getElementById("cartList");
let total = 0;

// Render cart item
function loadCart() {
    cartList.innerHTML = "";
    total = 0;

    if (cartData.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("totalPrice").innerText = "Total: $0";
        return;
    }

    cartData.forEach((item, index) => {
        total += item.price * item.qty;

        cartList.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div>
                    <h3>${item.name}</h3>
                    <p>Quantity: ${item.qty}</p>
                    <p>$ ${item.price.toLocaleString()}</p>
                </div>

                <button class="delete-btn" onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("totalPrice").innerText =
        "Total: $ " + total.toLocaleString();
}

// Hapus item tertentu
function removeItem(index) {
    cartData.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCart();
}

// Checkout (bersihkan cart)
function checkout() {
    if (cartData.length === 0) {
        alert("Cart is empty.");
        return;
    }
    alert("Checkout successful!");
    localStorage.removeItem("cart");
    cartData = [];
    loadCart();
}

// Clear cart manual
function clearCart() {
    localStorage.removeItem("cart");
    cartData = [];
    loadCart();
}

// Auto load saat halaman dibuka
window.onload = loadCart;
