
// // Global Variables
// let rows;
// let cols;
// let dificulty;

let rows = 10;
let cols = 10;
let cells = [];
const body = document.querySelector("body");

// //will be updated to JSX
// const body = document.querySelector("body");
// const userInput = document.createElement("input");
// const submitBtn = document.createElement("button");
// submitBtn.textContent = "Submit";

// submitBtn.onclick = () => {
//   localStorage.setItem("Dificulty", userInput.value);
//   dificulty = localStorage.getItem("Dificulty");
//   dificultySelection();
// }

// body.appendChild(userInput);
// body.appendChild(submitBtn);

// function dificultySelection() {
//  if (dificulty === "easy") {
//     rows = 10, cols = 10;
//     generateGrid();
//   } else if (dificulty === "medium") {
//     rows = 15, cols = 15;
//     generateGrid();
//   } else if (dificulty === "hard") {
//     rows = 30, cols = 15;
//     generateGrid();
//   }
//   console.log(rows, cols);
// }

// Creates cells


function generateCells(id, isMine) {
  return ({
    isMine: isMine || false,
    isRevealed: false,
    isFlagged: false,
    cellId: id,
  });
}

// Generates mines
function addMines() {
  const mineArray = [];
  while (mineArray.length < 10) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    if (!mineArray.includes(randomNum)) {
      mineArray.push(randomNum);
    }
  }
  mineArray.sort((a, b) => a-b);
  console.log(mineArray);
  return mineArray;
}

// Generates gird
function generateGrid() {
  const board = [];
  const mines = addMines();

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) { 
      const isMine = mines.includes(i * cols + j + 1);
      const cell = generateCells(i * cols + j + 1, isMine);
      cells.push(cell);
      row.push(cell);
    }
    board.push(row);
  }
  return board
}

const gameBoard = generateGrid();
console.log(gameBoard);
console.log(cells);

const cellGrid = document.createElement("div");
cellGrid.className = "cell-grid";

for (let i = 0; i < cells.length; i++) {
  const newCell = document.createElement("div");
  newCell.className = "cell";
  newCell.id = cells[i].cellId;
  newCell.textContent = cells[i].cellId;
  cellGrid.appendChild(newCell);

  newCell.onclick = () => {
  if (cells[i].isMine) {
    cells[i].isRevealed = true;
    newCell.style.backgroundColor = "red";
    newCell.textContent = "💣";
    setTimeout(() => {
      alert("Game Over");
      window.location.reload();
    }, 100)
  } else {
    cells[i].isRevealed = true;
    newCell.style.backgroundColor = "grey";
    newCell.textContent = "";
    newCell.style.border = "none"
  }
}
  body.appendChild(cellGrid);
}

// console.log(cellList)