const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let cobra = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 }
];

function desenhaCobra() {
  cobra.forEach((parte, index) => {
    ctx.fillRect(parte.x, parte.y, 10, 10);
  });
}

function moveCobra(event) {
  const direcao = event.key.replace('Arrow', '');
  const cabeca = { x: cobra[0].x, y: cobra[0].y };

  switch (direcao) {
    case 'Up':
      cabeca.y -= 10;
      break;
    case 'Down':
      cabeca.y += 10;
      break;
    case 'Left':
      cabeca.x -= 10;
      break;
    case 'Right':
      cabeca.x += 10;
      break;
  }

  cobra.unshift(cabeca);
  cobra.pop();
}

document.addEventListener('keydown', moveCobra);

function jogo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  desenhaCobra();
  requestAnimationFrame(jogo);
}

requestAnimationFrame(jogo);
