const dataString = `
Gap Report - Grocery
Focal SuperStore #101 | 28-10-2024 - 28-10-2024
Store NameBarcodeArticle NumberProduct NameBrandAisle Department
Case Pack Size
SR at Marked at Time
Current SR
Marked by
Marked At
Marked As
Last Received Date
Approval
Focal
SuperStore
#101
08002210125070
107626417
FILIPPO BERIO
BALSAMIC VINEGAR
OF MODENA 250ML
GR18Grocery6   06
Michal
Jurkowski
2024-10-28
15:45:44
No
Stock
2024-10-19
23:00:00
AUTO
Focal
SuperStore
#101
05060960661395
113517532
ITSU SWEET SOY &
SEA SALT CRISPY
SEAWEED THINS
MULTIPACK 4 X 5G
GR18Grocery8   08
Michal
Jurkowski
2024-10-28
15:52:01
No
Stock
2024-10-21
23:00:00
AUTO
Focal
SuperStore
#101
05014276701504
113510613
YUTAKA KIMCHI 200GGR18Grocery6   06
Michal
Jurkowski
2024-10-28
15:51:27
No
Stock
2024-10-19
23:00:00
AUTO
Focal
SuperStore
#101
05010251614586
106975674
TOMATO PUREE WITH
GARLIC 135G
GR19Grocery12  024
Michal
Jurkowski
2024-10-28
15:32:26
No
Stock
2024-10-19
23:00:00
AUTO
Focal
SuperStore
#101
08003753900438
100148150
ILLY ESPRESSO
COFFEE 250G
GR21Grocery6   06
Michal
Jurkowski
2024-10-28
12:03:49
No
Stock
2024-10-19
23:00:00
AUTO
Focal
SuperStore
#101
07612100054017
100138349
OPTIONS BELGIAN
CHOC DRINK 11G
GR21Grocery30  030
Michal
Jurkowski
2024-10-28
12:08:19
No
Stock
2024-10-12
23:00:00
AUTO
Focal
SuperStore
#101
07613037280364
110778121
STARBUCKS BY
NESPRESSO DARK
ESPRESO 10 X 57G
GR21Grocery8   -212
Michal
Jurkowski
2024-10-28
12:29:31
No
Stock
2024-10-21
23:00:00
AUTO
Focal
SuperStore
#101
05010525188072
112323402
HALLWAY RUNNER
GREY 50CM X 150CM
LR04
Home &
Leisure
6   55
Michal
Jurkowski
2024-10-28
11:34:31
No
Stock
2024-10-09
23:00:00
AUTO
Page 1 / 1`;

function extractColumnNames(dataString) {
    //console.log("Original Data String:", dataString); // Logging the input to check if it's being passed correctly

    // Step 1: Find the content from the second occurrence of 'Store' until 'Approval'
    // We use a positive lookahead to ensure we start from the second 'Store'
    const regex = /Store NameBarcodeArticle[\s\S]*?Approval/gm;

    // Step 2: Apply the regex to the dataString
    const match = dataString.match(regex);
    const singleLine = match[0];    
    //console.log(typeof singleLine)
    // Step 3: Log the match to see what's being matched
    //console.log("Matched Data:", match);

    // Step 4: If a match is found, return the matched string, otherwise return an empty string
    return singleLine ? match[0] : '';
}

function splitAndCombineDateTime(dataString) {
    // Step 1: Replace "Focal SuperStore #101" with a placeholder
    const placeholder = "__FocalSuperStore__";
    const modifiedString = dataString.replace("Focal SuperStore #101", placeholder);
    
    // Step 2: Split the string by spaces
    const wordsArray = modifiedString.split(/\s+/);
    
    // Step 3: Replace the placeholder back with the original phrase
    const finalArray = wordsArray.map(word => word === placeholder ? "Focal SuperStore #101" : word);
  
    // Step 4: Combine date and time into one element if they are adjacent
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;  // Date pattern: YYYY-MM-DD
    const timePattern = /^\d{2}:\d{2}:\d{2}$/;  // Time pattern: HH:MM:SS
  
    let resultArray = [];
    for (let i = 0; i < finalArray.length; i++) {
      // If we find a date followed by a time, combine them into one item
      if (datePattern.test(finalArray[i]) && timePattern.test(finalArray[i + 1])) {
        resultArray.push(`${finalArray[i]} ${finalArray[i + 1]}`);
        i++; // Skip the next element as it has already been combined
      } else {
        resultArray.push(finalArray[i]);
      }
    }
  
    return resultArray;
  }
  
  // Function to process an array of arrays of strings
  function processStringArray(stringArray) {
    return stringArray.map(arr => splitAndCombineDateTime(arr[0]));  // Process each string in the array
  }
  
  

function convertStringToObject(dataString) {
    // Step 1: Split the string by "Focal SuperStore #101" and clean empty entries
    const entries = dataString.split('Focal SuperStore #101').filter(entry => entry.trim() !== '');
  
    // Step 2: Map each entry into an array object
    const result = entries.map(entry => {
      // Step 3: Add the "Focal SuperStore #101" back to the start of the entry
      const cleanedEntry = 'Focal SuperStore #101 ' + entry.trim();
  
      // Step 4: Return the cleaned entry as part of the array
      return [cleanedEntry];  // Wrap it in an array
    });
  
    return result;
  }
  
  

  function cleanString(data) {
    // Match the content from the start of the string up until and including "Approval"
    const approvalIndex = data.indexOf('Approval');
    if (approvalIndex !== -1) {
      // Slice the string from after the word "Approval"
      data = data.slice(approvalIndex + 'Approval'.length).trim();
    }
  
    // Match the content after the word "Page" (including "Page")
    const pageIndex = data.indexOf('Page');
    if (pageIndex !== -1) {
      // Slice the string before the word "Page"
      data = data.slice(0, pageIndex).trim();
    }
  
    // Return the cleaned string
    return data;
  }

function parseDataString(dataString) {

    dataString = cleanString(dataString).replace(/\n/g, ' ').trim().replace(/\bAUTO\b/g, 'AUTO\n');
    
    dataString = convertStringToObject(dataString);
      
    dataString = processStringArray(dataString);
    //console.log(dataString)


    
  
//   // Find where the actual data starts (after the header info)
//   const startIdx = lines.findIndex(line => line.includes('Focal SuperStore #101'));

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

  return dataString;
}

module.exports = {
    parseDataString,
    extractColumnNames
  };
// Convert the string into a structured data object
//const structuredData = parseDataString(dataString);

// Output the structured data
//console.log(JSON.stringify(structuredData, null, 2));