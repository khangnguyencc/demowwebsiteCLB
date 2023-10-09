window.addEventListener('scroll', scrollValue);

function scrollValue() {
    var navbar = document.getElementById('change');
    var scroll = window.scrollY;
    if (scroll > 124) {
        navbar.classList.add('thay_doi');
    } else {
        navbar.classList.remove('thay_doi');
    }
}