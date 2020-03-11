// from data.js
const tableData = data;

// Find the table body node where we will append the data to.
const tableBody = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];

const createTable = data => {
  // Loop through the items in the data array.
  for (let i = 0; i < data.length; i++) {
    const tableRowData = data[i];
    // Insert a row in the table at the last row
    const newRow = tableBody.insertRow();

    // Insert a cell in the row at index 0
    const dateCell = newRow.insertCell(0);
    const cityCell = newRow.insertCell(1);
    const stateCell = newRow.insertCell(2);
    const countryCell = newRow.insertCell(3);
    const shapeCell = newRow.insertCell(4);
    const durationCell = newRow.insertCell(5);
    const commentsCell = newRow.insertCell(6);

    // Create text nodes for each.
    const dateText  = document.createTextNode(tableRowData.datetime);
    const cityText = document.createTextNode(tableRowData.city);
    const stateText = document.createTextNode(tableRowData.state);
    const countryText = document.createTextNode(tableRowData.country);
    const shapeText = document.createTextNode(tableRowData.shape);
    const durationText = document.createTextNode(tableRowData.durationMinutes.toString());
    const commentsText = document.createTextNode(tableRowData.comments);

    // Append a text node to the cell.
    dateCell.appendChild(dateText);
    cityCell.appendChild(cityText);
    stateCell.appendChild(stateText);
    countryCell.appendChild(countryText);
    shapeCell.appendChild(shapeText);
    durationCell.appendChild(durationText);
    commentsCell.appendChild(commentsText);
  }
}

createTable(tableData);


// Filter button
const filterBtn = document.getElementById('filter-btn');

// Date filter value
const dateFilterInput = document.getElementById("datetime");
let dateFilterInputValue = document.getElementsByTagName("input")[0].value;
console.log(dateFilterInputValue);
 
filterBtn.addEventListener("click", () => {
  console.log('Filter button clicked...')
  console.log(dateFilterInputValue);
  if (dateFilterInputValue) {
    const filteredData = tableData.filter(row => row.datetime === dateFilterInputValue);
    console.log(filteredData);
    createTable(filteredData); 
  }
});

dateFilterInput.addEventListener('input', updateDateTime);

function updateDateTime(e) {
  dateFilterInputValue = e.target.value;
}
