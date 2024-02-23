let gridContainer = document.querySelector(".grid");

let grid = [];
function makeGrid(gridSize) {
  if(gridSize > 100 || gridSize < 1){
    alert ("Invalid number of pixels");
  } else {
      for (let i = 0; i < gridSize**2; i++) {
        let pixelSize = 600/gridSize + "px";
        grid[i] = document.createElement("div");
        grid[i].style.width = pixelSize; //probably needs a px after but idk how?
        grid[i].style.height = pixelSize;
        grid[i].classList.add("uncolored");
        gridContainer.appendChild(grid[i]);
    }
  }
}

function draw(mode) {
  if(mode == "hover") {
    gridContainer.addEventListener("mouseover", (event) => {
      for (let i = 0; i < gridSize**2; i++) {
        grid[i].addEventListener("mouseover", (event) => {
          grid[i].classList.add("colored");
        }
      ); 
      }
    }
    );
  } else {
    gridContainer.addEventListener("click", (event) => {
      for (let i = 0; i < gridSize**2; i++) {
        grid[i].addEventListener("click", (event) => {
          grid[i].classList.add("colored"); //make it so it can be mouse dragging and clicking
        }
      ); 
      }
    }
    );
  }
}

let gridSize = 20;

makeGrid(gridSize); 
draw("hover");


let changeGrid = document.querySelector("#changeGrid");
let changeMode = document.querySelector("#changeMode");

//function changeGrid(numberOfPixels){ //these are probably really bad names but ikd
  
//}

//changeGrid.addEventListener("click", (event) => changeGrid());

/*

add button to change drawing to click and holding rather than just hovering

create array of variables for the pixels named "grid"

makeGrid(16);

create button;
set button text "Change etch-a-sketch size"
append button to button div

function removeGrid(gridName) {
  grid = undefined; //idk if u need to delete it
  parentNode.removeChild(child)
}

if (button.eventListener){
  let userInput = prompt user input "Enter a new etch a sketch size"
  makeGrid(userInput)
}

--css notes
  -set pixelDiv to a specific pixel size
  must wrap at the end of each line to the next
*/