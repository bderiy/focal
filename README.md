# CSV & PDF File testing framework

This testing framework was built utilizing Cypress framework. The goal is to validate that the given file is meeting acceptance criteria and pass testing.

Most libraries are coming with node.js and cypress.

One imported library is neat-csv (https://www.npmjs.com/package/neat-csv) for parsing CSV and pdfjs-dist.
  

## Installation

Use npm to install cypress and neat.

```bash
npm install cypress --save-dev 

npm -init //will install all dependacies
```

## Usage

```bash
npx cypress run
```
Note: by default it uses dev version of the file. To switch to prod version, make the change in testing file csv_file_test.cy.js in line 12, replacing "dev" with "prod".

It will run all files with cy.js extension.

For single file execution run the same command with adding the file name at the end.

## Structure
All test file are located in the folder:

-  /cypress/e2e

Regex patterns and functions which process request are located in the folder

- /cypress/data

The library that parse PDF file is located in the folder

- /cypress/support/dataParser.js

The testing files are located in the folder

- /cypress/fixture

## Testing approach
Because the spec doc is not available, there are a few assumption and rules were made on how to test files.

1. The file has a fixed persistent table-based structure, where is 15 columns and variable number of rows. All columns have a fixed names and written in the order.

There are tests which validate the following:

a. Number the columns = 15

b. Names of columns and their order

c. Number of rows = at least one and more

2. Another batch of tests verify the validity of the data in each column and cell.

For each column there is a set of rules designed:

2.1. Store Name - always string, can't be empty

2.2. Barcode - only numbers, 14 digits long, can't be empty (for CSV version it is coming with " ' " in the beginning)

2.3. Article -  only numbers, 9 digits long, starts with "1", can't be empty

2.4. Product Name - always string, can't be empty

2.5. Brand - always string, can be empty (based on the sample file)

2.6. Aisle - 2 letters, followed by 2 numbers, can't be empty

2.7. Department - always string, can't be empty

2.8. Case Pack Size - number, can't be empty

2.9. SR at Marked at Time - number, can't be empty

2.10. Current SR - number, can't be empty

2.11. Marked by - always string, can't be empty
 
2.12. Marked At - in date/time format 0000-00-00 00:00:00, can't be empty

2.13. Marked As - always string, can't be empty

2.14. Last Received Date - in date/time format 0000-00-00 00:00:00, can't be empty

2.15. Approval -  always string, can't be empty

Note: all conditions/rules were made based on analyzing the only one file. Once I get a full spec of requirements, these rules will be modified accordingly. For example, additional rule can be the length(maximum allowed of characters) of the strings or number.

## What else could be checked or improved in terms of test quality?
More deep PDF file testing. Currently, it has more limited functionality to validate the file.