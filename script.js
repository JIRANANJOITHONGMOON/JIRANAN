document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all sections
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Get the target section ID from the href attribute
            const targetSection = document.querySelector(this.getAttribute("href"));

            // Add active class to the target section
            targetSection.classList.add("active");
        });
    });
});
