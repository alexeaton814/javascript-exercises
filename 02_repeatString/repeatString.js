const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR";
    }
    else {
        let newWord = "";
        for (let i = 1; i <=num; i++){
            newWord += word;
        }
        return newWord;
    }
};

// Do not edit below this line
module.exports = repeatString;
