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
  const xPosition = [];

  for (let i = 0; i < 8; i++) {
    xPosition.push('8', '7', '6', '5', '4', '3', '2', '1');
  }

  for (let i = 0; i < cells.length; i++) {
    if (i >= 0 && i <= 7) {
      cells[i].setAttribute('data-position-y', 'A');
      cells[i].setAttribute('data-position-x', `${xPosition[i]}`);
    }
    if (i >= 8 && i <= 15) {
      cells[i].setAttribute('data-position-y', 'B');
      cells[i].setAttribute('data-position-x', `${xPosition[i]}`);
    }
    if (i >= 16 && i <= 23) {
      cells[i].setAttribute('data-position-y', 'C');
      cells[i].setAttribute('data-position-x', `${xPosition[i]}`);
    }
    if (i >= 24 && i <= 31) {
      cells[i].setAttribute('data-position-y', 'D');
      cells[i].setAttribute('data-position-x', `${xPosition[i]}`);
    }
    if (i >= 32 && i <= 39) {
      cells[i].setAttribute('data-position-y', 'E');
      cells[i].setAttribute('data-position-x', `${xPosition[i]}`);
    }
    if (i >= 40 && i <= 47) {
      cells[i].setAttribute('data-position-y', 'F');
      cells[i].setAttribute('data-position-x', `${xPosition[i]}`);
    }
    if (i >= 48 && i <= 55) {
      cells[i].setAttribute('data-position-y', 'G');
      cells[i].setAttribute('data-position-x', `${xPosition[i]}`);
    }
    if (i >= 56 && i <= 63) {
      cells[i].setAttribute('data-position-y', 'H');
      cells[i].setAttribute('data-position-x', `${xPosition[i]}`);
    }
  }
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
function rookStartPosition() {
  const cells = document.querySelectorAll('.cell-new');
  const rook_1 = creationRook('rook-1', 45);
  const rook_2 = creationRook('rook-2', 45);

  // Установили изначальные позиции
  cells[0].append(rook_1);
  cells[5].append(rook_2);

  cells.forEach((item) => {
    item.addEventListener('click', rookMoving);
  });

  // 2 ладьи
  const rooks = document.querySelectorAll('img');

  let currentRooks;

  rooks.forEach((rook) => {
    rook.addEventListener('click', function (event) {
      currentRooks = event.target;
    });
  });

  cells.forEach((cell) => {
    cell.addEventListener('click', function (event) {
      const currentCell = event.target;

      // Позиция выбранной ладьи
      let position_rook_x;
      let position_rook_y;

      if (currentRooks) {
        position_rook_x =
          currentRooks.parentElement.getAttribute('data-position-x');
        position_rook_y =
          currentRooks.parentElement.getAttribute('data-position-y');
      }

      if (currentCell.classList.contains('cell-new') && currentRooks) {
        const position_cell_x = currentCell.getAttribute('data-position-x');
        const position_cell_y = currentCell.getAttribute('data-position-y');

        if (
          position_rook_x === position_cell_x ||
          (position_rook_y === position_cell_y && !currentCell.children.length)
        ) {
          currentCell.appendChild(currentRooks);
        }
      }
    });
  });
}

rookStartPosition();

function rookMoving(event) {
  // Текущая ячейка по которой был совершен клик
  const currentCell = event.currentTarget;

  //   currentCell.append(currentRooks);
}

// Посмотреть как реализованно передвижение фигур у других
// Поменять координаты классы на дата атрибуты +
// При клике на ладью, сохранять ее в переменную
// Передвигать ладью на указанную клетку (помещать в div)
// Делать проверку, чтоб ладья двигалась только вертикально и горизонтально
// если на пути встречается другая ладья, ход невозможен
