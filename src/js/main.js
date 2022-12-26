import {setScrollWidth} from './utils/scroll-width';
import {iosVhFix} from './utils/ios-vh-fix';
import {carousel} from './modules/carousel';
import {dropdown} from './modules/dropdown';
import {person} from './modules/person';


window.addEventListener('DOMContentLoaded', () => {
  setScrollWidth();
  iosVhFix();
});

// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  carousel();
  dropdown();
  person();
});
