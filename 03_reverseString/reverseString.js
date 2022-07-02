const reverseString = function(fwdString) {
    let revString = "";
    for (let i = fwdString.length - 1; i >= 0; i--){
        revString += fwdString[i];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
