let gridContainer = document.querySelector(".grid");
let grid = [];
let numOfPixels;
let newSize;

function makeGrid(gridSize) {
  if(gridSize > 100 || gridSize < 1){
    alert ("Invalid number of pixels");
  } else {
      for (numOfPixels = 0; numOfPixels < gridSize**2; numOfPixels++) {
        let pixelSize = 600/gridSize + "px";
        grid[numOfPixels] = document.createElement("div");
        grid[numOfPixels].style.width = pixelSize; 
        grid[numOfPixels].style.height = pixelSize;
        grid[numOfPixels].classList.add("uncolored", "pixel");
        gridContainer.appendChild(grid[numOfPixels]); 
    }    
  }
}


function draw(mode) {
  if(mode == "hover") {
    gridContainer.addEventListener("mouseover", (event) => {
      for (let i = 0; i < newSize**2; i++) {
        grid[i].addEventListener("mouseover", (event) => {
          grid[i].classList.add("colored");
        }
      ); 
      }
    }
    );
  } else {
    gridContainer.addEventListener("click", (event) => {
      for (let i = 0; i < newSize**2; i++) {
        grid[i].addEventListener("click", (event) => {
          grid[i].classList.add("colored"); //make it so it can be mouse dragging and clicking
        }
      ); 
      }
    }
    );
  }
}


let changeGrid = document.querySelector("#changeGrid");
let changeMode = document.querySelector("#changeMode");

function removeGrid (){
  for(let i = 0; i < numOfPixels; i++) {
   gridContainer.removeChild(grid[i]);
  }
}

changeGrid.addEventListener("click", (event) => {
  newSize = prompt("Enter new grid size; 1-100 px");
  removeGrid();
  makeGrid(newSize);
  draw(newSize); //ok idk whats wrong but i think the d raw function isnt updating with the new grid2
}
);

newSize = 20;

makeGrid(newSize); 
draw("hover");
/*

add button to change drawing to click and holding rather than just hovering
*/