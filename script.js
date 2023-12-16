function toggleMenu() {
    var menu = document.querySelector('ul');
    menu.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.querySelector('header ul li:nth-child(1) a'); // Assuming Home is the first item in the navbar

    homeButton.addEventListener('click', function (event) {
        event.preventDefault();
        const homeSection = document.querySelector('.home-section');
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const servicesButton = document.querySelector('header ul li:nth-child(2) a'); // Assuming Services is the second item in the navbar

    servicesButton.addEventListener('click', function (event) {
        event.preventDefault();
        const servicesSection = document.querySelector('.category-section');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.querySelector('header ul li:nth-child(3) a'); // Assuming About is the third item in the navbar

    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();
        const aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.querySelector('header ul li:nth-child(4) a'); // Assuming About is the third item in the navbar

    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();
        const aboutSection = document.getElementById('contact-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});