// constantes para serem usadas globalmente

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
  const textRgb = document.getElementById('rgb-color');
  const randomColor = Math.round(Math.random() * 5);
  const balls = document.querySelectorAll('.ball');
  const searchColor = balls[randomColor].style.backgroundColor;
  textRgb.innerText = searchColor;
};
randomTextRgb();

// Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto ou errado;
const selectedBall = document.querySelector('#balls');
selectedBall.addEventListener('click', (event) => {
  // id recuperado para pegar o valor do background dos circulos;
  const bgBalls = event.target.style.backgroundColor;
  // id recuperado para adicionar um novo texto caso atenda as condições;
  const answer = document.querySelector('#answer');
  // id recuperado para pegar o valor do texto em rgb;
  const textRgb = document.getElementById('rgb-color').innerText;
  if (bgBalls === textRgb) answer.innerText = 'Acertou!';
  else answer.innerText = 'Errou! Tente novamente!';
});
