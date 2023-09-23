import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperPopular() {
    const swiper = new Swiper('#swiper-popular', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 32,
        navigation: {
            nextEl: '#popularNext',
            prevEl: '#popularPrev',
        },
        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
}

export default swiperPopular;
