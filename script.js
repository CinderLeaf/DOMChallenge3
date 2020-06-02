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
//this function can set class, addEventListener to each cell
//this function most do after add and delete cells. 
//if not, most cell did not get the class, and addEventListener properties
function setProperties(cell) {

    // #6 click on a single cell, callback changeColor function
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
        cell.classList.remove("noColor");
      }
    });
    cell.addEventListener("mouseup", e => {
      if (colored) {
        colored = false;
      }
    });
}

//put all the cell in an unpacked array
let tblCells = document.getElementsByTagName("td");
let tblCellsArray = [...tblCells];

//call the setProperties function add properties to all cell
for (let i=0; i < tblCellsArray.length; i++) {
    const cell = tblCellsArray[i];
    setProperties(cell);
}

// get the selected color chose from the html
let currentColor;
function selectedColor(color) {
    currentColor = color;
}
// callback: changing cell color to the currently selected color
function changeColor(){
    this.style.backgroundColor = currentColor;
    this.classList.remove("noColor");
}
/*-----------------------------------------------------*/
// #7-#9 have it own unpacked array call.
// if share an unpacked array,...
// ... the function only on work on the initial anount of row and column. 

// #7: fill all uncolored cells with the currently selected color 
function fillNonColored(){
    //put all the cell in an unpacked array
    let fillCell = document.getElementsByTagName("td");
    let fillCellarray = [...fillCell];

    // filter the cells that have class property
    const nonColored = fillCellarray.filter(cell => {
        return cell.classList.contains("noColor");
    });

    // change the background color of each uncolored cell and remove "noColor" class
    nonColored.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("noColor");
    })
}
    
// #8: fill all cells with the currently selected color -->
function fillAllColor(){
    //put all the cell in an unpacked array;
    let fillAllCells = document.getElementsByTagName("td");
    let fillAllCellarray = [...fillAllCells];
   //fill alll the cell to selected color
    fillAllCellarray.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("noColor");
    });
}

// #9: clear all cells/restore all cells to their initial color 
function clearAll(){
    //put all the cell in an unpacked array;
    let allCells = document.getElementsByTagName("td");
    let allCellsrray = [...allCells];
    // add the noColor class to cell, and give back the initial background Color
    allCellsrray.forEach(cell => {
        cell.style.backgroundColor = 'darkblue';
        cell.classList.add("noColor");
    });
}