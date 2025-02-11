function updateTotal() {
    let items = document.querySelectorAll(".cart-item");
    let subtotal = 0;

    items.forEach(item => {
        let priceText = item.querySelector("p.fw-bold").textContent;
        let price = parseInt(priceText.replace("$", "").replace(",", ""));
        let qty = item.querySelector(".cart-qty").value;
        subtotal += price * qty;
    });

    document.getElementById("subtotal").textContent = "$" + subtotal.toLocaleString();
    let total = subtotal + 10;
    document.getElementById("total").textContent = "$" + total.toLocaleString();
}

function removeItem(button) {
    button.closest(".cart-item").remove();
    updateTotal();
}