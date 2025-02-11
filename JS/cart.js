document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".col-md-8");
    const orderSummary = document.querySelector(".order-summary");
    const subtotalEl = document.getElementById("subtotal");
    const shippingEl = document.getElementById("shipping");
    const discountEl = document.getElementById("discount");
    const totalEl = document.getElementById("total");
    const emptyMessage = document.querySelector(".empty");

    function updateTotal() {
        let subtotal = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            const price = parseFloat(item.querySelector(".fw-bold").textContent.replace("$", ""));
            const qty = parseInt(item.querySelector(".cart-qty").value);
            subtotal += price * qty;
        });

        // Dynamically set shipping cost
        let shipping = subtotal > 1500 ? 30 : subtotal > 1000 ? 20 : subtotal > 500 ? 10 : 0;

        // Apply discount based on subtotal
        let discount = subtotal > 1200 ? 50 : subtotal > 800 ? 30 : 10;

        // Update HTML
        subtotalEl.textContent = `$${subtotal}`;
        shippingEl.textContent = `$${shipping}`;
        discountEl.textContent = `-$${discount}`;
        totalEl.textContent = `$${subtotal + shipping - discount}`;

        // Handle empty cart state
        if (subtotal === 0) {
            emptyMessage.style.display = "block";
            cartContainer.style.display = "none";
            orderSummary.style.display = "none";
        } else {
            emptyMessage.style.display = "none";
            cartContainer.style.display = "block";
            orderSummary.style.display = "block";
        }
    }

    // Function to remove items from cart
    function removeItem(button) {
        button.closest(".cart-item").remove();
        updateTotal();
    }

    // Attach event listeners
    document.querySelectorAll(".cart-qty").forEach(input => {
        input.addEventListener("change", updateTotal);
    });

    document.querySelectorAll(".btn-danger").forEach(button => {
        button.addEventListener("click", function () {
            removeItem(this);
        });
    });

    // Initialize total
    updateTotal();
});
