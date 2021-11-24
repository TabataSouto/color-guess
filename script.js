// CONSTANTES A SEREM UTILIZADA;
// const fatherOfAll = document.querySelector('main');
const optionColor = document.querySelector('#create-circle');

// REQUISITO 3: ADICIONAR OPÇÃO DE CORES;
function createCircle() {
// criar o for para criar a div 6 vezes;
  for (let i = 0; i < 6; i += 1) {
    // criar a div com a classe ball
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
  const newColor = `rgb(${random1}, ${random2}, ${random3})`;
  return newColor;
}

// fazer loop para que as cores aleatórias estejam em todos oa quadros
const ballColor = document.querySelectorAll('.ball');
for (let i = 0; i < ballColor.length; i += 1) {
  ballColor[i].style.backgroundColor = generateColor();
}
