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
