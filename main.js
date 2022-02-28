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

function cellNumbering() {
  const cells = document.querySelectorAll('.cell-new');
  for (let i = 0; i < cells.length; i++) {
    if (i >= 0 && i <= 7) {
      cells[i].classList.add('y-A');
      cells[i].classList.add(`x-8`);
    }
    if (i >= 8 && i <= 15) {
      cells[i].classList.add('y-B');
      cells[i].classList.add(`x-7`);
    }
    if (i >= 16 && i <= 23) {
      cells[i].classList.add('y-C');
      cells[i].classList.add(`x-6`);
    }
    if (i >= 24 && i <= 31) {
      cells[i].classList.add('y-D');
      cells[i].classList.add(`x-5`);
    }
    if (i >= 32 && i <= 39) {
      cells[i].classList.add('y-E');
      cells[i].classList.add(`x-4`);
    }
    if (i >= 40 && i <= 47) {
      cells[i].classList.add('y-F');
      cells[i].classList.add(`x-3`);
    }
    if (i >= 48 && i <= 55) {
      cells[i].classList.add('y-G');
      cells[i].classList.add(`x-2`);
    }
    if (i >= 56 && i <= 63) {
      cells[i].classList.add('y-H');
      cells[i].classList.add(`x-1`);
    }
  }
  console.log(cells);
}

cellNumbering();

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
