// from data.js
const tableData = data;

// HTML elements/nodes
const tableBody = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];
const filterBtn = document.getElementById('filter-btn');
const dateFilterInput = document.getElementById("datetime");
const tr = tableBody.getElementsByTagName("tr");

// Function to create/populate table with data.
const createTable = (data, tableBody) => {
  // Loop through the items in the data array.
  for (let i = 0; i < data.length; i++) {
    const tableRowData = data[i];
    // Insert a row in the table at the last row
    const newRow = tableBody.insertRow();

    // Insert a cell in the row at index.
    // Create text nodes for each.
    // Append a text node to the cell.
    Object.entries(tableRowData).forEach(([key, value], index) => {
      let cell = newRow.insertCell(index)
      let textNode = document.createTextNode(value.toString());
      cell.appendChild(textNode);
    })
  }
}

// Call the create table function.
createTable(tableData, tableBody);


let dateFilterInputValue = document.getElementsByTagName("input")[0].value;
 
filterBtn.addEventListener("click", () => {
  for (let i = 0; i < tr.length; i++) {
    if (dateFilterInputValue) {
      // Hide the row initially.
      tr[i].style.display = "none";
      let td = tr[i].getElementsByTagName("td");
      for (let j = 0; j < td.length; j++) {
        let cell = tr[i].getElementsByTagName("td")[0];
        if (cell) {
          if (cell.innerHTML.toUpperCase().indexOf(dateFilterInputValue) > -1) {
            tr[i].style.display = "";
            break;
          } 
        }
      }
    } else {
      tr[i].style.display = "";
    }
  }
});

// Function that gets fired when value of the datetime input changes.
dateFilterInput.addEventListener('input', e => dateFilterInputValue = e.target.value);


