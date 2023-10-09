
// // Global Variables
// let rows;
// let cols;
// let dificulty;

let rows = 10;
let cols = 10;
let cells = [];
let numOfMines = 10;
const mineArray = [];
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

// Creates cell objects with unique properties
function generateCells(id, isMine, neighbours) {
  return ({
    isMine: isMine || false,
    isRevealed: false,
    //isFlagged: false,
    cellId: id,
    proximity: 0,
    neighbourIds: neighbours,
  });
}

// Gets the neighbours of a cell
function getNeighbourIds(row, col, rows, cols) {
  const neighbours = [
    [-1,-1],[-1,0],[-1,1],
    [0, -1],/*0,0*/[0, 1],
    [1, -1],[1, 0],[1, 1]
  ];

  const neighbourIds = []; // ids of cells at neighbours coords

  neighbours.forEach(([rowOffset, colOffset]) => {
    const newRow = row + rowOffset;
    const newCol = col + colOffset;
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      neighbourIds.push(newRow * cols + newCol + 1);
    }
  });

  return neighbourIds;
}

// Generates mines
function addMines() {

  while (mineArray.length < numOfMines) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    if (!mineArray.includes(randomNum)) {
      mineArray.push(randomNum);
      mineArray.sort((a, b) => a - b);
    }
  }
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
      const neighbours = getNeighbourIds(i, j, rows, cols);
      const cell = generateCells(i * cols + j + 1, isMine, neighbours);
      cells.push(cell);
      row.push(cell);
    }
    board.push(row);
  }
  proximity();
  return board
}



const gameBoard = generateGrid();
console.log(gameBoard);
console.log(cells);

function proximity() {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].neighbourIds.length; j++) {
      const neighbourId = cells[i].neighbourIds[j];
      const neighbourCell = cells.find(cell => cell.cellId === neighbourId);
      if (neighbourCell.isMine) {
        cells[i].proximity++;
      }
    }
  }
}


const cellGrid = document.createElement("div");
cellGrid.className = "cell-grid";

// Rendering the gameboard/Cells and games functionality
// Will be updated to JSX when ready

for (let i = 0; i < cells.length; i++) {
  const newCell = document.createElement("div");
  newCell.className = "cell";
  newCell.id = cells[i].cellId;
  newCell.textContent = cells[i].proximity;
  cellGrid.appendChild(newCell);
  if (cells[i].isMine) {
    newCell.textContent = "💣";
  }
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
    newCell.style.border = "none";
}
}
  body.appendChild(cellGrid);
}

// console.log(cellList)