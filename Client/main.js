
// Global Variables
// let rows;
// let cols;
// let dificulty;

let rows = 10;
let cols = 10;


// will be updated to JSX

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
//   } else if (dificulty === "medium") {
//     rows = 15, cols = 15;
//   } else if (dificulty === "hard") {
//     rows = 30, cols = 15;
//   }
//   console.log(rows, cols);
// }

// Creates cells
const cells = (id, isMine) => {


  
  return ({
    isMine: false,
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

  console.log(mineArray[0])
  console.log(mineArray[mineArray.length-1])
  console.log(mineArray);
  return mineArray;
}

// Generates gird
function generateGrid() {
  const board = [];
  const mines = addMines();

  const body = document.getElementById("body");

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < cols; j++) { 
      row.push(cells(i * cols + j + 1,));

      if (mines.includes(i * cols + j + 1)) {
        console.log(row[j].isMine = true);
      }
    }
    board.push(row);
  }
  
  return board
    
}

const gameBoard = generateGrid();
console.log(gameBoard);
// console.log(cellList)