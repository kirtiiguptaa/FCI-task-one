document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLists = document.querySelector(".nav-lists");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("active");
        navLists.classList.toggle("active");
    });

    const dropdowns = document.querySelectorAll(".nav-item.dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.stopPropagation();
            const isActive = this.classList.contains("active");
            closeAllDropdowns();
            if (!isActive) {
                this.classList.add("active");
            }
        });
    });

    document.addEventListener("click", function () {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    }
});
