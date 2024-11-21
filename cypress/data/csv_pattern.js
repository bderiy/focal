class dataStorage{

    columnNames = {
        names: ['Store Name', 'Barcode', 'Article Number', 'Product Name', 'Brand', 'Aisle', 'Department', 'Case Pack Size', 'SR at Marked at Time', 'Current SR', 'Marked by', 'Marked At', 'Marked As', 'Last Received Date', 'Approval']
    }

    barcodeData = {
        barcode: ["'08002210125070","'05060960661395","'05014276701504","'05010251614586","'08003753900438","'07612100054017","'07613037280364","'05010525188072"]
    }

    articleData = {
        article: ["107626417", "113517532", "113510613", "106975674", "100148150", "100138349", "110778121", "112323402"]
    }

    productNameData = {
        productName: ["FILIPPO BERIO BALSAMIC VINEGAR OF MODENA 250ML", "ITSU SWEET SOY & SEA SALT CRISPY SEAWEED THINS MULTIPACK 4 X 5G", "YUTAKA KIMCHI 200G", " TOMATO PUREE WITH GARLIC 135G", "ILLY ESPRESSO COFFEE      250G", "OPTIONS BELGIAN CHOC DRINK 11G", "STARBUCKS BY NESPRESSO DARK ESPRESO 10 X 57G", " HALLWAY RUNNER GREY 50CM X 150CM"]
    }

    aisleData = {
        aisle: ["GR18", "GR18", "GR18", "GR19", "GR21", "GR21", "GR21", "LR04"]
    }

    departmentData = {
        department: ["Grocery", "Grocery", "Grocery", "Grocery", "Grocery", "Grocery", "Grocery", "Home & Leisure"]
    }

    casePackSizeData = {
        casePackSize: ["6", "8", "6", "12", "6", "30", "8", "6"]
    }

    marketTimeData = {
        marketTime: ["0", "0", "0", "0", "0", "0", "-2", "5"]
    }

    currentCRData = {
        currentCR: ["6", "8", "6", "24", "6", "30", "12", "5"]
    }

    markedAtData = {
        markedAt: ["2024-10-28 15:45:44", "2024-10-28 15:52:01", "2024-10-28 15:51:27", "2024-10-28 15:32:26", "2024-10-28 12:03:49", "2024-10-28 12:08:19", "2024-10-28 12:29:31", "2024-10-28 11:34:31"]
    }

    lastRecievedDateData = {
        lastRecievedDate: ["2024-10-19 23:00:00", "2024-10-21 23:00:00", "2024-10-19 23:00:00", "2024-10-19 23:00:00", "2024-10-19 23:00:00", "2024-10-12 23:00:00", "2024-10-21 23:00:00", "2024-10-09 23:00:00"]
    }

    areObjectsEqual(obj1, obj2) {
        // Get the keys of both objects
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
    
        // If they don't have the same number of keys, they are not equal
        if (keys1.length !== keys2.length) {
            return false;
        }
    
        // Check if all the keys and values are the same
        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    
        return true;
    }
    

}
module.exports = new dataStorage;