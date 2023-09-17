import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperPopular() {
    const swiper = new Swiper('#swiper-popular', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 32,
        navigation: {
            nextEl: '#popularNext',
            prevEl: '#popularPrev',
        },
    });
}

export default swiperPopular;
