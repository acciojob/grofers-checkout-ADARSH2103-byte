const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	// Select all price elements inside the table
const priceElements = document.querySelectorAll(".prices");

// Initialize total
let total = 0;

// Loop through each price element and sum the values
priceElements.forEach(priceEl => {
    // Convert the text content to a number
    const price = parseFloat(priceEl.textContent);
    if (!isNaN(price)) {
        total += price;
    }
});

// Select the table
const table = document.querySelector("table");

// Create a new row for total
const totalRow = document.createElement("tr");

// Create a single cell for total and span all columns
const totalCell = document.createElement("td");
totalCell.textContent = "Total: " + total.toFixed(2); // format to 2 decimal places
totalCell.colSpan = table.rows[0].cells.length; // span across all columns

// Append the cell to the row
totalRow.appendChild(totalCell);

// Append the row to the table
table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

