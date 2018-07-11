// import { LEFT_ARROW_KEYCODE, RIGHT_ARROW_KEYCODE } from './util';
import '../sass/style.scss';
import initialState from './data';
import headerTemplate from './header';
import screenGreeting from './levels/greeting';
import screenRules from './levels/rules';
import screenIntro from './levels/intro';


const mainView = document.querySelector('main.central');

function changeScreen(template) {
  if (!template) return;
  mainView.innerHTML = '';
  mainView.appendChild(template);
}

changeScreen(screenIntro);