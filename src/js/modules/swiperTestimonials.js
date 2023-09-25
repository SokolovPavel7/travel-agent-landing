import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper1, swiper2, swiper3, swiperHorizontal;

const configVertical = {
    direction: 'vertical',
    // slidesPerView: 4,
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
    a11y: false,
    freeMode: true, //чтобы толкнуть и слайдер листался
    speed: 2000,
    loop: true, //зацикливание
    autoplay: {
        delay: 0.0, //задержка между слайдами
        disableOnInteraction: false,
    },
};

const configHorizontal = {
    direction: 'horizontal',
    slidesPerView: 1,
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
    breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	},
};

//Устанавливаем breakpoint (точку перехода)
const breakpoint = window.matchMedia('(max-width:1023px)');

//функция, которая проверяет срабатывание медиа запроса в breakpoint
const breakpointChecker = function () {
    // если выполняется условие и экран имеет размер до 1023px
    if (breakpoint.matches === true) {
        //запускаем горизонтальный свайпер
        swiperHorizontal = new Swiper('#testimonials-horizontal-swiper', configHorizontal);
        // а вериткальный свайпер удаляем
        if (swiper1 !== undefined) swiper1.destroy(true, true);
        if (swiper2 !== undefined) swiper2.destroy(true, true);
        if (swiper3 !== undefined) swiper3.destroy(true, true);
        // или/и ничего не делать
        return;
        // иначе, если условие не выполняется
    } else if (breakpoint.matches === false) {
        // запускаем вертикальный свайпер
        swiper1 = new Swiper('#testimonials-col-1', configVertical);
        swiper2 = new Swiper('#testimonials-col-2', configVertical);
        swiper3 = new Swiper('#testimonials-col-3', configVertical);
        //а горизонтальный удаляем
        if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
        return;
    }
};

breakpoint.addListener(breakpointChecker);

export default breakpointChecker

