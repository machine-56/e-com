document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabs = document.querySelectorAll(".tab");
    tabLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent page reload
            
            // Remove active class from all links
            tabLinks.forEach(link => link.classList.remove("active"));
            // Hide all tabs
            tabs.forEach(tab => tab.classList.remove("active"));
            // Activate the clicked tab and link
            this.classList.add("active");
            document.getElementById(this.getAttribute("data-tab")).classList.add("active");
        });
    });
});