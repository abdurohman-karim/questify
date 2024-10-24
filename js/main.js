document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const toggleBar = document.querySelector('.toggle-bar');
    const headerMenu = document.querySelector('.header_menu');

    toggleBar.addEventListener('click', function () {
        header.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
});
