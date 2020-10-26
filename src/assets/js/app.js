"use strict";
import animateSymbols from './modules/animateSymbols';
import burger from './modules/burger';
import modal from './modules/modal';
import mask from './modules/mask';
import forms from './modules/forms';
import scrolling from './modules/scrolling';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    animateSymbols('.cost', '.flying-symbol');
    animateSymbols('.intro', '.flying-symbol');
    burger('.header__main-nav', '.menu-button');
    modal('.button','.modal__overlay');
    forms();
    scrolling();
    slider({
        nextButtonSelector: '.slider__button--next',
        prevButtonSelector: '.slider__button--prev',
        sliderSelector: '.slider'
    });
    mask('input[name="phone"]');
});