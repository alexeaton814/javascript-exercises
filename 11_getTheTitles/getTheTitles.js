const getTheTitles = function(input) {
    let outArray = [];
    input.forEach(element => {
        outArray.push(element.title);
    });
    return outArray;
};

// Do not edit below this line
module.exports = getTheTitles;
