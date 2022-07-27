const fibonacci = function(input) {
    if (typeof(input) != 'number') {
        input = Number(input);
    }

    if (input < 0) {
        return "OOPS";
    }

    let fibArray = [];
    for (let i = 0; i < input; i++) {
        if (i <= 1) {
            fibArray.push(1);
        }
        else {
            //debugger;
            console.log(fibArray);
            let prevNum1 = fibArray[i - 1]; 
            let prevNum2 = fibArray[i - 2];
            fibArray.push(prevNum1 + prevNum2)}
    }
    console.log(fibArray);
    return fibArray[fibArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
