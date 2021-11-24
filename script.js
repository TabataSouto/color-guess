// REQUISITO 3: ADICIONAR OPÇÃO DE CORES;
function createCircle() {
// criar o for para criar a div 6 vezes;
  for (let i = 0; i < 6; i += 1) {
    // criar a div com a classe ball
    const optionColor = document.querySelector('#create-circle');
    const newDiv = document.createElement('div');
    newDiv.className = 'ball';
    optionColor.appendChild(newDiv);
  }
}
createCircle();

// REQUISITO 4: COLOCAR CORES ALEATORAS;
// criar as cores aleatorias
// Referência para relembrar sobre cores aleatórias: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function generateColor() {
  const random1 = Math.round(Math.random() * 255);
  const random2 = Math.round(Math.random() * 255);
  const random3 = Math.round(Math.random() * 255);
  return `${random1}, ${random2}, ${random3}`;
}

// fazer loop para que as cores aleatórias estejam em todos oa quadros
function paintBallClass() {
  const ballColor = document.querySelectorAll('.ball');
  // ballcolor são as div com classe ball criadas no requisito 3
  for (let i = 0; i < ballColor.length; i += 1) {
    ballColor[i].style.backgroundColor = `rgb(${generateColor()})`;
  }
}
paintBallClass();

// fazer o texto rgb color mudar aleatorio
const randomNumber = Math.round(Math.random() * 5);
const ballColor = document.querySelectorAll('.ball')[randomNumber];
const rbgSelected = ballColor.style.backgroundColor;

const textRgb = document.querySelector('#rgb-color');
textRgb.innerText = rbgSelected.replace('rgb', '');

// REQUISITO 5: CLICAR NA COR E MOSTRA CERTO OU ERRADO;
const optionColor = document.querySelector('#create-circle');
const answerResult = document.querySelector('#answer');

optionColor.addEventListener('click', (event) => {
  const elementClick = event.target;
  const colorClick = elementClick.style.backgroundColor;
  if (colorClick === rbgSelected) {
    answerResult.innerText = 'Acertou!';
  } else {
    answerResult.innerText = 'Errou! Tente novamente!';
  }
});
