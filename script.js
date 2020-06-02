//the exist row and column number
let rows = 1;
let columns = 3;

//
let colored = false;

//grab the table
let tbl = document.getElementById("myTable");

// all cells set it's properties
let tblCells = document.getElementsByTagName("td");
let tblCellsArray = [...tblCells];
//event handlers and sets class 
for (let i=0; i < tblCellsArray.length; i++) {
    const cell = tblCellsArray[i];
    setProperties(cell);
}

function setProperties(cell) {

    // #6 click on a single cell, changing its color to the currently selected color
    cell.classList.add("noColor");
    cell.addEventListener("click", changeColor);
    
    //#10: click and hold (mouseover) from a single cell (start) to a different cell (end)
    // such that all affected/hovered-over cells from start to end change to the currently selected color.
    cell.addEventListener("mousedown", color => {
        colored = true;
    });
    cell.addEventListener("mousemove", color => {
      if (colored) {
        changeColor(cell)
      }
    });
    cell.addEventListener("mouseup", color => {
      if (colored) {
        colored = false;
      }
    });
}

let currentColor;

function selectedColor(color) {
    currentColor = color;
}
//
function changeColor(){
    this.style.backgroundColor = currentColor;
    this.classList.remove("noColor");
}


//#1: add rows to the grid
function appendRow() {
   
    let newRow = document.createElement("tr");
    for(let i = 0; i < columns; i++) {
        let  newCell = document.createElement("td");
        setProperties(newCell);
        newRow.appendChild(newCell);
    }
    tbl.appendChild(newRow);
    rows++;
}

//#2: add columns to the grid
function appendColumn() {
    let selectAllRows = document.querySelectorAll("tr");
    for(let i = 0; i < rows; i++) {
        //selectAllRows[i].insertCell(-1);
        let  newCell = document.createElement("td");
        setProperties(newCell);
        selectAllRows[i].appendChild(newCell);
    }
    columns++;
}

//#3: remove rows from the grid
function deleteRow() {
    tbl.deleteRow(-1);
    rows--;
}

//#4: remove columns from the grid
function deleteColumn() {
    let selectAllRows = document.querySelectorAll("tr");
    for(let i = 0; i < rows; i++) {
        selectAllRows[i].deleteCell(-1);
    }
    columns--;
}

/**
 * // all cells set it's properties
let tblCells = document.getElementsByTagName("td");
let tblCellsArray = [...tblCells];
 */

// #7: fill all uncolored cells with the currently selected color -->
function fillNonColored(){
 
    
}
    
// #8: fill all cells with the currently selected color -->
function fillAllColor(){


}
// #9: clear all cells/restore all cells to their original/initial color -->
function clearAll(){


}
