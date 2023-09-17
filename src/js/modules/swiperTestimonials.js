import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperTestimonials() {
    const swiper1 = new Swiper('#testimonials-col-1', {
        direction: 'vertical',
        // slidesPerView: 4,
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        a11y: false,
        freeMode: true, //чтобы толкнуть и слайдер листался
        speed: 2000,
        loop: true, //зацикливание
        autoplay: {
            delay: 0.0, //задержка между слайдами
            disableOnInteraction: false,
        },
    });
    const swiper2 = new Swiper('#testimonials-col-2', {
        direction: 'vertical',
        // slidesPerView: 4,
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        a11y: false,
        freeMode: true, //чтобы толкнуть и слайдер листался
        speed: 2000,
        loop: true, //зацикливание
        autoplay: {
            delay: 0.0, //задержка между слайдами
            disableOnInteraction: false,
        },
    });
    const swiper3 = new Swiper('#testimonials-col-3', {
        direction: 'vertical',
        // slidesPerView: 4,
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        a11y: false,
        freeMode: true, //чтобы толкнуть и слайдер листался
        speed: 2000,
        loop: true, //зацикливание
        autoplay: {
            delay: 0.0, //задержка между слайдами
            disableOnInteraction: false,
        },
    });
}

export default swiperTestimonials;
