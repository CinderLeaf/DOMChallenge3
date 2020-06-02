//the exist row and column number
let rows = 1;
let columns = 3;

//grab the table
let tbl = document.getElementById("myTable");

//#1: add rows to the grid
function appendRow() {
    let newRow = tbl.insertRow(-1);
    for(let i = 0; i < columns; i++) {
        let  newCell = newRow.insertCell(-1);
    }
    rows++;
}

//#2: add columns to the grid
function appendColumn() {
    let selectAllRows = document.querySelectorAll("tr");
    for(let i = 0; i < rows; i++) {
        selectAllRows[i].insertCell(-1);
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


