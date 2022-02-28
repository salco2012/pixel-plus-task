function chessGenerate() {
  const board = document.querySelector('.board');

  let numCell = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (numCell % 2 === 0) {
        board.innerHTML += `<div class="cell-new light"></div>`;
      } else {
        board.innerHTML += `<div class="cell-new black"></div>`;
      }
      numCell++;
    }
    numCell++;
  }
}

chessGenerate();
