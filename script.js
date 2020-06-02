//the exist row and column number
let rows = 1;
let columns = 3;

//
let colored = false;

//grab the table
let tbl = document.getElementById("myTable");

// all cells set it's properties

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
/*-----------------------------------------------------*/
//
function setProperties(cell) {

    // #6 click on a single cell, changing its color to the currently selected color
    cell.classList.add("noColor");
    cell.addEventListener("click", changeColor);
    
    //#10: click and hold (mouseover) from a single cell (start) to a different cell (end)
    // such that all affected/hovered-over cells from start to end change to the currently selected color.
    cell.addEventListener("mousedown", e => {
        colored = true;
    });
    cell.addEventListener("mousemove", e => {
      if (colored) {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
      }
    });
    cell.addEventListener("mouseup", e => {
      if (colored) {
        colored = false;
      }
    });
}

let tblCells = document.getElementsByTagName("td");
let tblCellsArray = [...tblCells];
//call the setProperties function add property
for (let i=0; i < tblCellsArray.length; i++) {
    const cell = tblCellsArray[i];
    setProperties(cell);
}
let currentColor;

//
function changeColor(){
    this.style.backgroundColor = currentColor;
    this.classList.remove("noColor");
}

function selectedColor(color) {
    currentColor = color;
}
/*-----------------------------------------------------*/

// #7: fill all uncolored cells with the currently selected color -->
function fillNonColored(){
    let fillCell = document.getElementsByTagName("td");
    let fillCellarray = [...fillCell];

    // filter out the cells that are colored
    const nonColored = fillCellarray.filter(cell => {
        return cell.classList.contains("noColor");
    });

    // change the background color of each uncolored cell and remove "uncolored" class
    nonColored.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("noColor");
    })
}
    
// #8: fill all cells with the currently selected color -->
function fillAllColor(){
    let fillAllCells = document.getElementsByTagName("td");
    let fillAllCellarray = [...fillAllCells];
   
    fillAllCellarray.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("noColor");
    });
}

// #9: clear all cells/restore all cells to their original/initial color -->
function clearAll(){
    let allCells = document.getElementsByTagName("td");
    let allCellsrray = [...allCells];

    // add the noColor class, and give back the initial background Color
    allCellsrray.forEach(cell => {
        cell.style.backgroundColor = 'darkblue';
        cell.classList.add("noColor");
    });
}