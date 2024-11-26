//This class stores the regex patterns for different type of data
// and the function for validation

class regexStorage {

    //Object to store regex patterns
    regexData = {
        string: /^.+$/,  //Any string with at least one charachter
        string_or_empty: /.*/, //Any string with at least one charachter or empty data including "" or "  "
        barcode: /^'\d{14}$/,
        article_number: /^1\d{8}$/,
        aisle: /^[A-Za-z]{2}\d{2}$/, // Aisle has a format of four characters, where 2 first are letters and last two are numbers
        two_size_number: /^-?\d{1,2}$/, // Any number maximum 2 digits long and can be positive or negative 
        date_and_time: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, //date and time in format YYYY-MM-DD HH:MM:SS
    }
    

    validateRegex(input, dataType){
        console.log(input);
        const regex = this.regexData[dataType];
        if (!regex) {
            console.log("Invalid data type.");
            return false;
        }
       
        const isValid = regex.test(input);
        console.log(isValid);
        return isValid;
    }
}

module.exports = new regexStorage;