// function parseDataString(dataString) {
//   // Split the input into lines
//   const lines = dataString.trim().split('\n');

//   // Find where the actual data starts (after the header info)
//   const startIdx = lines.findIndex(line => line.includes('Focal SuperStore'));

//   // Extract the data lines
//   const dataLines = lines.slice(startIdx + 1);

//   // Initialize an array to hold the structured data
//   const tableData = [];

//   // Define the new field names (columns)
//   const columns = [
//     "Store Name", "Barcode", "Article Number", "Product Name", "Brand", "Aisle", "Department",
//     "Case Pack Size", "SR at Marked at Time", "Current SR", "Marked by", "Marked At", "Marked As",
//     "Last Received Date", "Approval"
//   ];

//   // Process each product block (each product data starts after every 14 lines)
//   let currentRow = [];
//   let count = 0;

//   for (let i = 0; i < dataLines.length; i++) {
//     const line = dataLines[i].trim();

//     // Handle the structured data: each block has 14 values (fields)
//     currentRow.push(line);

//     count++;

//     if (count === 14) {
//       // Once we reach 14 values, push the row into tableData and reset
//       let rowObject = {};

//       // Map each column to the respective value in the row
//       columns.forEach((col, index) => {
//         rowObject[col] = currentRow[index];
//       });

//       tableData.push(rowObject);
//       currentRow = [];
//       count = 0;
//     }
//   }

//   return tableData;
// }

// module.exports = new parseDataString;