document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', () => navMenu.classList.toggle('open'));
});



/*Mobile Nave Menu*/
document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');

    navContainer.addEventListener('click', (event) => {
        const menuIcon = event.target.closest('.menu-icon');
        const navMenu = document.querySelector('.nav-menu');

        if (menuIcon) {
            navMenu.classList.toggle('open');
        }
    });
});



// Add this JavaScript code for the accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item button');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            const panel = this.nextElementSibling;

            // Toggle active class to expand/collapse accordion item
            this.parentNode.classList.toggle('active');

            // Toggle display property of the panel
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });
    });
});