import ScrollReveal from 'scrollreveal';

//Базовые настройки
ScrollReveal({
    distance: '60px',
    duration: 2800,
    //reset: true,
});

function scrollRevealModule() {
    ScrollReveal().reveal('.header, .partners, .popular__title', {
        origin: 'top',
    });
    ScrollReveal().reveal('.discover__picture-hint, .discover__title', {
        origin: 'left',
    });
    ScrollReveal().reveal(
        '.discover__picture-scroll, .discover__text, .popular__controls',
        {
            origin: 'right',
        }
    );
    ScrollReveal().reveal('.discover__form', {
        origin: 'bottom',
    });
}

export default scrollRevealModule;
