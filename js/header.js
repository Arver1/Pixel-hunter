const heartEmpty = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
const heartFull = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';

export default template => `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${template.time}</h1>
    <div class="game__lives">
        ${new Array(3 - template.lives).fill(heartEmpty).join('')}
         ${new Array(template.lives).fill(heartFull).join('')}
    </div>
  </header>`;
