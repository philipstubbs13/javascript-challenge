// Function to create/populate table with data.
const createTable = (data, tableBody) => {
  // Loop through the items in the data array.
  data.forEach(ufo => {
    // Insert a row in the table at the last row
    let newRow = tableBody.append('tr');

    // Insert a cell in the row at index, create text nodes for each, append a text node to the cell.
    Object.entries(ufo).forEach(([key, value]) => newRow.append('td').text(value.toString()));
  });
};

// Function to populate select dropdown with options.
const populateSelectDropdown = (options, selectElement) => {
  selectElement
    .append('option')
    .attr('value', '')
    .text('');
  let sortedOptions = options.sort();
  sortedOptions.forEach(option =>
    selectElement
      .append('option')
      .attr('value', option)
      .text(option),
  );
};
