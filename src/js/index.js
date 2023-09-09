import autoCompleteModule from './modules/autoCompleteModule';
import easePickModule from './modules/easePickModule';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

autoCompleteModule();
easePickModule();

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});

// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
