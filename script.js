function createBalls() {
  for (let i = 1; i <= 6; i += 1) {
    const balls = document.querySelector('#balls');
    const div = document.createElement('div');
    div.className = 'ball';
    balls.appendChild(div);
  }
}
createBalls();
