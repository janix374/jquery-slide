import './styles/styles.scss';
import 'jquery';
import velocity from 'velocity-animate';
import { slider } from './js/slider';
import { itemFirst, itemSecond, itemThird } from './js/items';
import itema from './components/itema.html';
import itemb from './components/itemb.html';
import itemc from './components/itemc.html';
import header from './components/header.html';
import small from './components/smallscreen.html';

var w = window.innerWidth;
console.log(w);

$(function () {
  // Load files
  $('#itema').html(itema);
  $('#itemb').html(itemb);
  $('#itemc').html(itemc);
  $('#header').html(header);
  $('#small-screen').html(small);

  // slider function and logic
  slider();
  // item1 animation
  itemFirst();
  // item2 animation
  itemSecond();
  // item3 animation
  itemThird();
});
