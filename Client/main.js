
// Global Variables
const rows = 10;
const  cols = 10;
const initialArray = [];

// Creates cells
function createCell(id) {
  return {
    isMine: false,
    isRevealed: false,
    isFlagged: false,
    cellId: id,
  };
}

function addMines() {
  const mineArray = [];

  while (mineArray.length < 10) {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (!mineArray.includes(randomNum)) {
      mineArray.push(randomNum);
    }
  }

  return mineArray;
}

// Generates gird
function generateGrid() {
  const board = [];
  const mineArray = addMines();

  const body = document.getElementById("body");

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < cols; j++) { 
      row.push(createCell(i * cols + j + 1));
    }

    board.push(row);
  }

  return board
    
}

const gameBoard = generateGrid();
console.log(gameBoard);