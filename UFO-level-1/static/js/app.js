// from data.js
const tableData = data;

// HTML elements/nodes
const table = d3.select('table');
const tableBody = table.select('tbody');
const filterBtn = d3.select('#filter-btn');

// Call the create table function to build the table and insert data into the table.
createTable(tableData, tableBody);

// State to hold the values of the user input fields.
let inputValues = {
  datetime: '',
};

// Get the keys of the input elements.
// and use those keys to set the name attribute for each input element.
const inputKeys = Object.keys(inputValues);
d3.selectAll('.form-control').each(function(d, i) {
  this.setAttribute('name', inputKeys[i]);
});

// Function that gets fired when value of input changes.
d3.selectAll('.form-control').on('change', event => (inputValues[d3.event.target.name] = d3.event.target.value));

// Event listener that gets fired when the filter button is clicked.
filterBtn.on('click', () => {
  // filterValues are the values of what the user typed inside the form input fields.
  const filterValues = Object.values(inputValues);
  const tableRows = tableBody.selectAll('tr');
  tableRows.each(function() {
    let row = this;
    // Display each row initially.
    row.style.display = '';
    // Get the table data for each row.
    let td = row.getElementsByTagName('td');
    // Convert table data to an array so that we can iterate over it.
    let tdArray = Array.from(td);
    tdArray.forEach(function(td, tdIndex) {
      let cell = row.getElementsByTagName('td')[tdIndex];
      if (cell) {
        if (filterValues[tdIndex]) {
          // If the row is not already filtered out and matches the filter from the user input,
          // then display the row.
          if (row.style.display !== 'none' && cell.innerHTML.toUpperCase().indexOf(filterValues[tdIndex].toUpperCase()) > -1) {
            return;
          }
          row.style.display = 'none';
        }
      }
    });
  });
});
