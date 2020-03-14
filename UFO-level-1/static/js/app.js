// from data.js
const tableData = data;

// HTML elements/nodes
const tableBody = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];
const filterBtn = document.getElementById('filter-btn');
const tableRows = tableBody.getElementsByTagName('tr');
const inputs = document.getElementsByTagName('input');

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
      let cell = newRow.insertCell(index);
      let textNode = document.createTextNode(value.toString());
      cell.appendChild(textNode);
    });
  }
};

// Call the create table function to build the table and insert data into the table.
createTable(tableData, tableBody);

// State to hold the values of the user input fields.
let inputValues = {
  datetime: '',
  city: '',
  state: '',
  country: '',
  shape: '',
  comment: '',
};

// Get the keys of the input elements.
// and use those keys to set the name attribute for each input element.
const inputKeys = Object.keys(inputValues);
for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  input.setAttribute('name', inputKeys[i]);
}

// Event listener that gets fired when the filter button is clicked.
filterBtn.addEventListener('click', () => {
  // filterValues are the values of what the user typed inside the form input fields.
  const filterValues = Object.values(inputValues);
  // Convert list of tr html elements to an array so that we can iterate over the table rows using forEach.
  let tableRowsArray = Array.from(tableRows);
  tableRowsArray.forEach(row => {
    // Display each row initially.
    row.style.display = '';
    // Get the table data for each row.
    let td = row.getElementsByTagName('td');
    // Conert table data to an array so that we can iterate over it.
    let tdArray = Array.from(td);
    tdArray.forEach((td, tdIndex) => {
      let cell = row.getElementsByTagName('td')[tdIndex];
      if (cell) {
        if (filterValues[tdIndex]) {
          console.log(`in table: ${cell.innerHTML.toUpperCase()}, filter: ${filterValues[tdIndex]}`);
          // If the row is not already filtered out and matches the filter from the user input,
          // then display the row.
          if (
            row.style.display !== 'none' &&
            cell.innerHTML.toUpperCase().indexOf(filterValues[tdIndex].toUpperCase()) > -1
          ) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        }
      }
    });
  });
});

// Function that gets fired when value of input changes.
document.addEventListener('input', handleFieldChange);

function handleFieldChange(e) {
  inputValues[e.target.name] = e.target.value;
}
