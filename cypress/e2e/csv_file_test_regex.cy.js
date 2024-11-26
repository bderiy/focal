const { hasKey } = require('jsprim');
const { keys } = require('lodash');
const neatCSV = require('neat-csv');
const { Key } = require('sshpk');
import regexStorage from "../data/regex_pattern"
import dataStorage from "../data/csv_pattern"

describe('template spec', () => {
    let table;
  
    before(()=>{
      cy
      .fixture("csv_files/prod/gap_report_grocery_focal_superstore_101_2024-10-28_2024-10-28.csv")
      .then(neatCSV)
      .then(data =>{
        table = data;
      })
    });

     //Validate the number of columns and rows
  it('Validate Number of Columns and rows', () => {
    let keys = Object.keys(table[0])
    //Validate number of columns
    expect(keys.length).to.equal(15);
    //Validate number of rows
    expect(table.length).to.be.greaterThan(0);
  })

  it('Validate Columns\' names', () => {
    let keys = Object.keys(table[0])
    let template = dataStorage.columnNames.names;
    console.log(dataStorage.areObjectsEqual(keys, template));
    expect(dataStorage.areObjectsEqual(keys, template)).to.equal(true);
  })
  
    //This test validates if Store name is the same for all raws
  it('Validate Column Store Name data ', () => {
    for(let i=0; i < table.length; i++){
      console.log(table[i]['Store Name']);
      let parsedData = table[i]['Store Name'];
      expect(regexStorage.validateRegex(parsedData,"string")).is.equal(true);
    }
  });

  //This test validates if Barcode number matches a template
  it('Validate Column Barcode data ', () => {
    for(let i=0; i < table.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = table[i]['Barcode'];
        expect(regexStorage.validateRegex(parsedData,"barcode")).is.equal(true);
      }
    });

    //This test validates if Article Number matches a template
  it('Validate Column Article Number data ', () => {
    for(let i=0; i < table.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = table[i]['Article Number'];
        expect(regexStorage.validateRegex(parsedData,"article_number")).is.equal(true);
      }
    });

    //This test validates if Product Name matches a template
  it('Validate Column Product Name data ', () => {
    for(let i=0; i < table.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = table[i]['Product Name'];
        expect(regexStorage.validateRegex(parsedData,"string")).is.equal(true);
      }
    });

     //This test validates if Brand matches a template
  it('Validate Column Brand data ', () => {
    for(let i=0; i < table.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = table[i]['Brand'];
        expect(regexStorage.validateRegex(parsedData,"string_or_empty")).is.equal(true);
      }
    });

         //This test validates if Aisle matches a template
  it('Validate Column Aisle data ', () => {
    for(let i=0; i < table.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = table[i]['Aisle'];
        expect(regexStorage.validateRegex(parsedData,"aisle")).is.equal(true);
      }
    });

  //This test validates if Department matches a template
  it('Validate Column Department data ', () => {
    for(let i=0; i < table.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = table[i]['Department'];
        expect(regexStorage.validateRegex(parsedData,"string")).is.equal(true);
      }
    });

  //This test validates if Case Pack Size matches a template
  it('Validate Column Case Pack Size data ', () => {
    for(let i=0; i < table.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = table[i]['Case Pack Size'];
        expect(regexStorage.validateRegex(parsedData,"two_size_number")).is.equal(true);
      }
    });

  //This test validates if SR at Marked at Time matches a template
  it('Validate Column SR at Marked at Time data ', () => {
    for(let i=0; i < table.length; i++){
        //expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
        let parsedData = table[i]['SR at Marked at Time'];
        expect(regexStorage.validateRegex(parsedData,"two_size_number")).is.equal(true);
      }
    });

  //This test validates if Current SR a matches template
  it('Validate Column Current SR data ', () => {
    for(let i=0; i < table.length; i++){
        let parsedData = table[i]['Current SR'];
        expect(regexStorage.validateRegex(parsedData,"two_size_number")).is.equal(true);
      }
    });

  //This test validates if Marked by a matches template
  it('Validate Column Marked by data ', () => {
    for(let i=0; i < table.length; i++){
        let parsedData = table[i]['Marked by'];
        expect(regexStorage.validateRegex(parsedData,"string")).is.equal(true);
      }
    });
  
  //This test validates if Marked At a matches template
  it('Validate Column Marked At data ', () => {
    for(let i=0; i < table.length; i++){
        let parsedData = table[i]['Marked At'];
        expect(regexStorage.validateRegex(parsedData,"date_and_time")).is.equal(true);
      }
    });
  
  //This test validates if Marked As a matches template
  it('Validate Column Marked As data ', () => {
    for(let i=0; i < table.length; i++){
        let parsedData = table[i]['Marked As'];
        expect(regexStorage.validateRegex(parsedData,"string")).is.equal(true);
      }
    });

  //This test validates if Last Received Date a matches template
  it('Validate Column Last Received Date data ', () => {
    for(let i=0; i < table.length; i++){
        let parsedData = table[i]['Last Received Date'];
        expect(regexStorage.validateRegex(parsedData,"date_and_time")).is.equal(true);
      }
    });

  //This test validates if Approval a matches template
  it('Validate Column Approval data ', () => {
    for(let i=0; i < table.length; i++){
        let parsedData = table[i]['Approval'];
        expect(regexStorage.validateRegex(parsedData,"string")).is.equal(true);
      }
    });
})  