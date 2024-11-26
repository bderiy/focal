const { parseDataString } = require('../support/dataParser'); 
const { extractColumnNames } = require('../support/dataParser'); 
import regexStoragePDF from "../data/regex_pattern_pdf"

describe('template spec', () => {
  let pdfText;
  let result;

  before(()=>{
    cy.task('readPDF', '/Users/bderiy/repo/focal/cypress/fixtures/csv_files/dev/gap_report_grocery_focal_superstore_101_2024-10-28_2024-10-28.pdf')
    .then(function(data)
    {
        pdfText = data.text;
        const inputString = pdfText;
        result = parseDataString(inputString);
        console.log(result);
    })
  })

  it('Validate Columns\' names', () => {
    console.log(pdfText);
     //result = extractColumnNames(pdfText);
    //console.log(result.replace(/[\r\n]+/g, ' ').trim());
     //const singleLine = result.replace(/[\r\n]+/g, ' ').trim();
    
   // expect(singleLine).to.equal(regexStoragePDF.regexData.column_names);
  })
  
    //This test validates if Store name is the same for all raws
  it('Validate Column Store Name data ', () => {
    for(let i=0; i < result.length; i++){
      //console.log(result[i][0]);
      let parsedData = result[i][0];
      expect(regexStoragePDF.validateRegex(parsedData,"string")).is.equal(true);
    }
  });

   //This test validates if Barcode number matches a template
   it('Validate Column Barcode data ', () => {
    for(let i=0; i < result.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        //console.log(result[i][1]);
        let parsedData = result[i][1];
        expect(regexStoragePDF.validateRegex(parsedData,"barcode")).is.equal(true);
      }
    });

      //This test validates if Article Number matches a template
  it('Validate Column Article Number data ', () => {
    for(let i=0; i < result.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = result[i][2];
        expect(regexStoragePDF.validateRegex(parsedData,"article_number")).is.equal(true);
      }
    });

  //This test validates if Marked by a matches template
  it('Validate Column Marked by data ', () => {
    for(let i=0; i < result.length; i++){
        let parsedData = result[i][result[i].length-5];
        expect(regexStoragePDF.validateRegex(parsedData,"string")).is.equal(true);
      }
    });

    //This test validates if Marked At a matches template
  it('Validate Column Marked At data ', () => {
    for(let i=0; i < result.length; i++){
        let parsedData = result[i][result[i].length-5];
        expect(regexStoragePDF.validateRegex(parsedData,"date_and_time")).is.equal(true);
      }
    });

      //This test validates if Marked As a matches template
  it('Validate Column Marked As data ', () => {
    for(let i=0; i < result.length; i++){
        let parsedData = result[i][result[i].length-3];
        expect(regexStoragePDF.validateRegex(parsedData,"string")).is.equal(true);
      }
    });


     //This test validates if Last Received Date a matches template
  it('Validate Column Last Received Date data ', () => {
    for(let i=0; i < result.length; i++){
        //console.log(result[i].length);
        let parsedData = result[i][result[i].length-2];
        expect(regexStoragePDF.validateRegex(parsedData,"date_and_time")).is.equal(true);
      }
    });

    //This test validates if Approval a matches template
  it('Validate Column Approval data ', () => {
    for(let i=0; i < result.length; i++){
        //console.log(result[i].length);
        let parsedData = result[i][result[i].length-1];
        expect(regexStoragePDF.validateRegex(parsedData,"string")).is.equal(true);
    }
    });
})