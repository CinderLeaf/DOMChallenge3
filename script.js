// #1: add rows to the grid
function createCell(cell, text, style) {
    var div = document.createElement('div'), 
        txt = document.createTextNode(text); 

    div.appendChild(txt);                    
    div.setAttribute('class', style);        
    div.setAttribute('className', style);    
    cell.appendChild(div);                   
}

// #1: add rows to the grid
function appendRow() {
    var tbl = document.getElementById('myTable'),
        row = tbl.insertRow(tbl.rows.length),
        i;     

    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }
}

//#2: add columns to the grid
function appendColumn() {
    var tbl = document.getElementById('myTable'),
        i;

    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}

// #3: remove rows from the grid 
function deleteRow() {
    var tbl = document.getElementById('myTable'), 
        lastRow = tbl.rows.length - 1,             
        i;

    for (i = lastRow; i > 0; i--) {
        tbl.deleteRow(i);
    }
}
 
// #4: remove columns from the grid
function deleteColumn() {
    var tbl = document.getElementById('myTable'),
        lastCol = tbl.rows[0].cells.length - 1,   
        i, j;

    for (i = 0; i < tbl.rows.length; i++) {
        for (j = lastCol; j > 0; j--) {
            tbl.rows[i].deleteCell(j);
        }
    }
}