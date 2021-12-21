const answer = document.querySelector('#answer');
const textRgb = document.getElementById('rgb-color');
const score = document.querySelector('#score');
let points = 0;

// função para criar os 6 círculos;
function createBalls() {
  const fatherBalls = document.querySelector('#balls');
  for (let i = 1; i <= 6; i += 1) {
    const div = document.createElement('div');
    div.className = 'ball';
    fatherBalls.appendChild(div);
  }
}
createBalls();

// adicionar cores aleatoriamente aos círculos;
function randomColors() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

function coloringBalls() {
  const balls = document.querySelectorAll('.ball');
  balls.forEach((element, index) => {
    balls[index].style.backgroundColor = randomColors();
  });
}
coloringBalls();

// adicionar texto com rgb aleatório dos três circulos;
// fou feita a multiplicação por 5 pelo fato da classe ball ter 5 posições;
const randomTextRgb = () => {
  const randomColor = Math.round(Math.random() * 5);
  const balls = document.querySelectorAll('.ball');
  const searchColor = balls[randomColor].style.backgroundColor;
  // replace para tirar a palavra 'rgb' das cores;
  textRgb.innerText = searchColor.replace('rgb', '');
};
randomTextRgb();

// Crie um botão para iniciar/reiniciar o jogo
const restart = document.querySelector('#reset-game');
restart.addEventListener('click', () => {
  coloringBalls();
  randomTextRgb();
  answer.innerText = 'Escolha uma cor';
  textRgb.style.color = 'black';
});

// Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto ou errado;
const selectedBall = document.querySelector('#balls');

selectedBall.addEventListener('click', (event) => {
  // id recuperado para pegar o valor do background dos circulos;
  const e = event.target;
  const bgBalls = e.style.backgroundColor.replace('rgb', '');
  // id recuperado para adicionar um novo texto caso atenda as condições;
  // id recuperado para pegar o valor do texto em rgb;
  if (bgBalls === textRgb.innerText) {
    answer.innerText = 'Acertou!';
    textRgb.style.color = e.style.backgroundColor;
    restart.innerText = 'Reiniciar Cores';
    points += 3;
    score.innerText = `Placar: ${points}`;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    textRgb.style.color = `rgb${textRgb.innerText}`;
    restart.innerText = 'Reiniciar Jogo';
  }
});
