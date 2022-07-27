const palindromes = function (input) {
    let validChars = [];
    for (let i = 65; i <=90; i++){
        validChars.push(String.fromCharCode(i));
    }

    input = input.toUpperCase();

    let formattedInput = Array.from(input).filter(letter => {
        if (validChars.includes(letter) == true) {
            return true;
        }
    })

    console.log(formattedInput);
    console.log(formattedInput.reverse());
    for (let i = 0; i < formattedInput.length/2 + 1; i++) {
        if (formattedInput[i] !== formattedInput.reverse()[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
