import tabs from './modules/tabs';
//import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
//import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    //modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2020-06-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});

$(".wsk_slider").slick({

    // normal options...
    infinite: false,
  
    // the magic
    responsive: [{
  
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });