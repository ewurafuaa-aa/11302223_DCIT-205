document.addEventListener('DOMContentLoaded', function () {
    // Get all the links and sections
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Add click event listeners to the links
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show the selected section
            const targetId = this.getAttribute('id').replace('-link', '');
            const targetSection = document.getElementById(targetId);
            targetSection.classList.remove('hidden');
        });
    });
});

/*Mobile Nave Menu*/
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});