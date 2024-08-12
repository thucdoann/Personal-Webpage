let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2200,
    delay: 200,
    reset: true
});

sr.reveal('.main-text', {delay: 50, origin: 'top'});
sr.reveal('.icons', {delay: 300, origin: 'right'});


