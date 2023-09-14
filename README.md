## HTML верстка сайта лендинга на Gulp сборке. Адаптив, SCSS, календарь, swiper slider, анимации.

1. Для разработки используем макет в figma и gulp-сборку от ВебКадеми (https://www.youtube.com/watch?v=D_HW-tvyKKE&t=894s)
2. Для ускорения разработки используем плагин eCSStractor for VSCode для копирования всех классов:
   2.1. ctrl+shift+p и вводим команду eCSStractor Run - команда копирует все классы со страницы и на странице со стилями нажимаем ctrl+v
   2.2. Или настроим сочетание клавишь: шестеренка -> настройка сочетания клавишь -> открываем json файл по значку в верхнем правом углу и вставляем в массив код в виде объекта:
   {
   "key": "ctrl+shift+x",
   "command": "extension.ecsstractor_port_run",
   "when": "editorTextFocus"
   }

# В проекте в секции discover в формах ввода выбора локации и даты используем npm пакеты:

1. npm пакет autocomplete - автоподстановка страны:

-   npm i @tarekraafat/autocomplete.js - команда установки
-   инструкция по запуску: https://tarekraafat.github.io/autoComplete.js/#/usage

2. Использование npm пакета календаря:

-   npm i @easepick/bundle - пакет даты
-   npm i @easepick/core @easepick/time-plugin - пакет времени
-   инструкция по запуску: https://easepick.com/packages/bundle.html#usage

## Используем Swiper-слайдер из npm пакета swiper

-   npm install swiper

## Используем анимацию из npm пакета scrollreveal

Этот пакет используется для вызова анимации на определенные элементы сайта через селектор (класс) элемента:

-   npm install scrollreveal
-   инструкция по запуску https://www.npmjs.com/package/scrollreveal
-   параметры использования https://scrollrevealjs.org/api/reveal.html
