# HTML верстка сайта лендинга на Gulp сборке. Адаптив, SCSS, календарь, swiper slider, анимации.

1. Для разработки используем макет в figma и gulp-сборку от ВебКадеми (https://www.youtube.com/watch?v=D_HW-tvyKKE&t=894s)
2. Для ускорения разработки используем плагин eCSStractor for VSCode для копирования всех классов:
   2.1. ctrl+shift+p и вводим команду eCSStractor Run - команда копирует все классы со страницы и на странице со стилями нажимаем ctrl+v
   2.2. Или настроим сочетание клавишь: шестеренка -> настройка сочетания клавишь -> открываем json файл по значку в верхнем правом углу и вставляем в массив код в виде объекта:
   {
   "key": "ctrl+shift+x",
   "command": "extension.ecsstractor_port_run",
   "when": "editorTextFocus"
   }

## В проекте в секции discover в формах ввода выбора локации и даты используем npm пакеты:

1. npm пакет autocomplete - автоподстановка страны:

-   npm i @tarekraafat/autocomplete.js - команда установки
-   инструкция по запуску: https://tarekraafat.github.io/autoComplete.js/#/usage

2. Использование npm пакета календаря:

-   npm i @easepick/bundle - пакет даты
-   npm i @easepick/core @easepick/time-plugin - пакет времени
-   инструкция по запуску: https://easepick.com/packages/bundle.html#usage

## Используем Swiper-слайдер из npm пакета swiper для секции popular

-   npm install swiper
-   ссылка на инструкцию https://swiperjs.com/get-started

## Используем анимацию из npm пакета scrollreveal

Этот пакет используется для вызова анимации на определенные элементы сайта через селектор (класс) элемента:

-   npm install scrollreveal
-   инструкция по запуску https://www.npmjs.com/package/scrollreveal
-   параметры использования https://scrollrevealjs.org/api/reveal.html

## Используя возможности пакета gulp-file-include (прописан в сборку gulp), выводим карточки с рейтингами в секции testimonials c помощью шаблона карточки

-   инструкция по использованию https://www.npmjs.com/package/gulp-file-include
-   код прописан в файлах: testimonials.json; testimonials.html; card-review.html и testimonials.scss

## В секции testimonials для карточек с рейтингами используем вертикальный слайдер

1. Ссылка на инструкцию https://swiperjs.com/get-started
2. HTML разметка в файле testimonials.html
3. В файле swiperTestimonials.js настройки js для свайпера
4. В файле testimonials.scss задать высоту столбца всему вертикальному свайперу в доп классе testimonials\_\_swiper и каждому элементу, а также прописать для плавности анимации scc-свойства доп классу smooth-transition. Это делается потому, что в js-свойствах свайпера нет такого режима:
   .smooth-transition {
   -webkit-transition-timing-function: linear !important;
   -o-transition-timing-function: linear !important;
   transition-timing-function: linear !important;
   }
