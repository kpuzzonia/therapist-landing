const hamburger = document.getElementById('hamburger');
const mobileNavLinks = document.getElementById('mobileNavLinks');

hamburger.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('open');
});