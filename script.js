// #1: add rows to the grid
function createCell(cell, text, style) {
    let div = document.createElement('div');
    let txt = document.createTextNode(text); 

    div.appendChild(txt);                    
    div.setAttribute('class', style);        
    div.setAttribute('className', style);    
    cell.appendChild(div);                   
}

// #1: add rows to the grid
function appendRow() {
    let tbl = document.getElementById('myTable');
    let row = tbl.insertRow(tbl.rows.length);

    for (let i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }
}

//#2: add columns to the grid
function appendColumn() {
    let tbl = document.getElementById('myTable');

    for (leti = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}

// #3: remove rows from the grid 
function deleteRow() {
    let tbl = document.getElementById('myTable');
    let   lastRow = tbl.rows.length - 1;             

    for (let i = lastRow; i > 0; i--) {
        tbl.deleteRow(i);
    }
}
 
// #4: remove columns from the grid
function deleteColumn() {
    let tbl = document.getElementById('myTable');
    let lastCol = tbl.rows[0].cells.length - 1;

    for (let i = 0; i < tbl.rows.length; i++) {
        for (let j = lastCol; j > 0; j--) {
            tbl.rows[i].deleteCell(j);
        }
    }
}