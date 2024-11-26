const { defineConfig } = require("cypress");
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');
//const { resolve } = require("path");
//const path = require('path');
//const { getDocument } = require('pdfjs-dist');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',
      {
        readPDF(pdfPath)
        {
          return new Promise((resolve)=>
          {
            const filePath = path.resolve(pdfPath)
            const dataBuffer = fs.readFileSync(filePath)
            pdf(dataBuffer).then(function(data){
              resolve(data);
            })
          }
      )}
      }

      )
    },
  },
});
