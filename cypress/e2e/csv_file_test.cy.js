const { hasKey } = require('jsprim');
const { keys } = require('lodash');
const neatCSV = require('neat-csv');
const { Key } = require('sshpk');
import dataStorage from "../data/csv_pattern"

describe('template spec', () => {
  let table;

  before(()=>{
    cy
    .fixture("csv_files/dev/gap_report_grocery_focal_superstore_101_2024-10-28_2024-10-28.csv")
    .then(neatCSV)
    .then(data =>{
      table = data;
    })
  });

  //Validate the number of columns and raws
  it('Validate Number of Columns and raws', () => {
    let keys = Object.keys(table[0])
    //Validate number of columns
    expect(keys.length).to.equal(15);
    //Validate number of raws
    expect(table.length).to.equal(8);
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
      console.log(table[i]['Store Name'])
      expect(table[i]['Store Name']).is.equal("Focal SuperStore #101")
    }
  });

   //This test validates if Barcode number matches a template
   it('Validate Column Barcode data ', () => {
   for(let i=0; i < table.length; i++){
      expect(table[i]['Barcode']).is.equal(dataStorage.barcodeData.barcode[i])
    }
  });

    //This test validates if Article number matches a template
    it('Validate Column Article data ', () => {
      for(let i=0; i < table.length; i++){
         expect(table[i]['Article Number']).is.equal(dataStorage.articleData.article[i])
       }
     });

     //This test validates if Product name matches a template
    it('Validate Column Product name data ', () => {
      for(let i=0; i < table.length; i++){
         expect(table[i]['Product Name']).is.equal(dataStorage.productNameData.productName[i])
       }
     });

     //This test validates if Brand name matches a template
     it('Validate Column Brand data ', () => {
      for(let i=0; i < table.length; i++){
         expect(table[i]['Brand']).is.equal("")
       }
     });

     //This test validates if Aisle name matches a template
     it('Validate Column Aisle data ', () => {
      for(let i=0; i < table.length; i++){
         expect(table[i]['Aisle']).is.equal(dataStorage.aisleData.aisle[i])
       }
     });

     //This test validates if Department matches a template
     it('Validate Column Department data ', () => {
      for(let i=0; i < table.length; i++){
         expect(table[i]['Department']).is.equal(dataStorage.departmentData.department[i])
       }
     });

     //This test validates if Case pack size matches a template
     it('Validate Column Case pack size data ', () => {
      for(let i=0; i < table.length; i++){
         expect(table[i]['Case Pack Size']).is.equal(dataStorage.casePackSizeData.casePackSize[i])
       }
     });

      //This test validates if Market Time matches a template
      it('Validate Column Market Time data ', () => {
        for(let i=0; i < table.length; i++){
           expect(table[i]['SR at Marked at Time']).is.equal(dataStorage.marketTimeData.marketTime[i])
         }
       });

       //This test validates if Current SR matches a template
      it('Validate Column Current SR data ', () => {
        for(let i=0; i < table.length; i++){
           expect(table[i]['Current SR']).is.equal(dataStorage.currentCRData.currentCR[i])
         }
       });
       
       //This test validates if Marked by matches a template
      it('Validate Column Marked by data ', () => {
        for(let i=0; i < table.length; i++){
           expect(table[i]['Marked by']).is.equal("Michal Jurkowski")
         }
       });

      //This test validates if Marked at matches a template
      it('Validate Column Marked At data ', () => {
        for(let i=0; i < table.length; i++){
           expect(table[i]['Marked At']).is.equal(dataStorage.markedAtData.markedAt[i])
         }
       });

      //This test validates if Marked As matches a template
      it('Validate Column Marked As data ', () => {
        for(let i=0; i < table.length; i++){
           expect(table[i]['Marked As']).is.equal("No Stock")
         }
       });

      //This test validates if Last Received Date matches a template
      it('Validate Column Last Received Date data ', () => {
        for(let i=0; i < table.length; i++){
           expect(table[i]['Last Received Date']).is.equal(dataStorage.lastRecievedDateData.lastRecievedDate[i])
         }
       });

       //This test validates if Approval matches a template
      it('Validate Column Approval data ', () => {
        for(let i=0; i < table.length; i++){
           expect(table[i]['Approval']).is.equal("AUTO")
         }
       });


})