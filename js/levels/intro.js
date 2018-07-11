import { getElementFromTemplate } from '../util';

const template = `<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`;

const introScreen = getElementFromTemplate(template).content;

introScreen.querySelector('.intro__asterisk').addEventListener('click', () => {
  console.log('click');
});

export default introScreen;
