let gridContainer = document.querySelector(".grid");
let grid = [];
let numOfPixels;
let newSize;
let mode;

function makeGrid(gridSize) {
  if(gridSize > 100 || gridSize < 1){
    alert ("Invalid number of pixels");
  }else {
      for(numOfPixels = 0; numOfPixels < gridSize**2; numOfPixels++) {
        let pixelSize = 600/gridSize + "px";
        grid[numOfPixels] = document.createElement("div");
        grid[numOfPixels].style.width = pixelSize; 
        grid[numOfPixels].style.height = pixelSize; //might replace numOfPixels with i and gridSize with numOfPixels
        grid[numOfPixels].classList.add("uncolored", "pixel");
        gridContainer.appendChild(grid[numOfPixels]); 
        gridContainer.style.width = 600 + 2*gridSize + "px";
    }    
  }
}

function getMouseDown(element) {
  if(element.addEventListener("mousedown", (event) => {
    return true;
  })) {
    return true;
  } else {
    return false;
  }
};

gridContainer.addEventListener("mousedown", (event) => {
  if(getMouseDown(gridContainer)){
    console.log("yippeee!!");
  }
}
);

function draw(mode) {
  if(mode == "hover") { 
    for(let i = 0; i < newSize**2; i++) {
      grid[i].addEventListener("mouseover", (event) => {
        grid[i].classList.add("colored");
      }); 
    }
  }else if (mode == "click") { //click/drag 
    /*gridContainer.addEventListener("mousedown", (event) => {
      for(let i = 0; i < newSize**2; i++) {
        grid[i].classList.toggle("colored");
      }
    });*/

    for(let i = 0; i < newSize**2; i++) {
      grid[i].addEventListener("mousedown", (event) => {
        grid[i].classList.toggle("colored");
      });
    }
    /*
      while mousedown = true, any pixel the mouse hovers over turns black! 
      
       event listener for mousedown{
    while mousedown {
      add colored class
      event listener for mouse move{
        add colored classe
      }
    ); 
    }*/
  }
}

let changeGrid = document.querySelector("#changeGrid");
let changeMode = document.querySelector("#changeMode");
let resetGrid = document.querySelector("#resetGrid");

function removeGrid (){
  for(let i = 0; i < numOfPixels; i++) {
   gridContainer.removeChild(grid[i]);
  }
}

changeGrid.addEventListener("click", (event) => {
  newSize = prompt("Enter new grid size; 1-100 px");
  newSize = Number(newSize)
  if(Number.isInteger(newSize) && newSize > 0 && newSize < 100) {
    removeGrid();
    makeGrid(newSize);
    draw(mode); 
  }else {
    alert("Please enter a valid number of pixels");
  }
}
);

resetGrid.addEventListener("click", (event) => {
  for(let i = 0; i < numOfPixels; i++) {
    grid[i].classList.remove("colored");
   } //grid doesnt reset idk why
}
);

newSize = 20;

mode = "hover";

makeGrid(newSize); 
draw(mode);

changeMode.addEventListener("click", (event) => {
  if(mode == "hover"){
    mode = "click";
    draw(mode);
  } else if(mode == "click"){
    mode = "hover";
    draw(mode); //doesnt actually change modes
  }
});

/*
additional functions i think would be cool
  color picker
  click + drag draw function instead of a simple hover


  event listener for mousedown{
    while mousedown {
      add colored class
      event listener for mouse move{
        add colored classe
      } 
    }
  }
*/