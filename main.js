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

// Функция создания ладьи
function creationRook(nameClass, width) {
  const rook = document.createElement('img');
  rook.classList.add(nameClass);
  rook.src = 'https://img.icons8.com/stickers/50/000000/rook.png';
  rook.width = width;
  return rook;
}

// Функция отвечающая за передвижение фигур по доске
function rookMoving() {
  const cells = document.querySelectorAll('.cell-new');
  const rook_1 = creationRook('rook-1', 45);
  const rook_2 = creationRook('rook-2', 45);

  // Установили изначальные позиции
  cells[0].append(rook_1);
  cells[5].append(rook_2);
}

rookMoving();
