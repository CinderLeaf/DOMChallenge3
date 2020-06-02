//the exist row and column number
let rows = 1;
let columns = 3;

//
let colored = false;

//grab the table
let tbl = document.getElementById("myTable");

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

/*-----------------------------------------------*/
function selectedColor(color) {
    currentColor = color;
}

function setProperties(cell) {
    // #5 select a color from a dropdown menu of colors
    // #6 click on a single cell, changing its color to the currently selected color
    cell.classList.add("noColor");
    cell.addEventListener("click", changeColor);

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

function changeColor(){
    this.style.backgroundColor = currentColor;
    this.classList.remove("noColor");
}
