import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperModule() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 32,
        navigation: {
            nextEl: '#sliderNext',
            prevEl: '#sliderPrev',
        },
    });
}

export default swiperModule;
