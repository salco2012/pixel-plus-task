function chessGenerate() {
  const board = document.querySelector('.board');

  for (let i = 0; i < 8; i++) {
       
      for (let j = 0; j < 8; j++) {
         board.innerHTML += `<div class="cell-new"></div>`;
      }
  }

}

chessGenerate();
