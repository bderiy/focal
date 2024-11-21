# CSV File testing framework

This framework was built utilizing Cypress framework.

Most libraries are coming with node.js and cypress.

One imported library is neat-csv (https://www.npmjs.com/package/neat-csv)
  

## Installation

Use npm to install cypress and neat.

```bash
npm install cypress --save-dev 

npm install neat-csv@v5 --save-dev  
```

## Usage

```bash
npx cypress run
```
Note: by default it uses dev version of the file. To switch to prod version, make the change in testing file csv_file_test.cy.js in line 12, replacing "dev" with "prod"

## Document data validation rules
Production version of the file was taken as a template, the data from the file was stored into JS object for consistency validation.

The scope of testing is to test main parameters of the file: the number of columns and raws, as well as the name of the columns.

Then, going column by column and validating each cell if it matches the expected result.

## What else could be checked or improved in terms of test quality?
Neat library converts all data into String type. One of the steps to deeper analyze the data is to try to convert numbers into numerical data format, or apply regex validation  where it can be implemented, but in this case, strict data consistency would be lost.

Also it might make sense to get "expected result" data not from the prod file, but get it from db or api to validate that file was created and have correct data.