// import { LEFT_ARROW_KEYCODE, RIGHT_ARROW_KEYCODE } from './util';
import initialScreen from './levels/stats';
import '../sass/style.scss';

// const templates = document.querySelectorAll('template');
const mainView = document.querySelector('main.central');
mainView.innerHTML = '';
mainView.appendChild(initialScreen.content);
/*
const changeView = (number = 0) => {
  if (number < 0 || number > templates.length - 1) {
    return;
  }
  mainView.innerHTML = '';
  mainView.appendChild(templates[number].content.cloneNode(true));
  changeView.number = number;
};

document.addEventListener('keydown', (e) => {
  if (e.altKey === true && e.keyCode === LEFT_ARROW_KEYCODE) {
    changeView(changeView.number - 1);
  } else if (e.altKey === true && e.keyCode === RIGHT_ARROW_KEYCODE) {
    changeView(changeView.number + 1);
  }
});

changeView();
*/
