function assignBiggerNumSmallerNum(num1, num2){
    if (num1 > num2){
        biggerNum = num1;
        smallerNum = num2;
    }
    else {
        biggerNum = num2;
        smallerNum = num1;
    }
}

function isNegativeNumber(num){
    return num < 0;
}

const sumAll = function(num1, num2) {
    let sum = 0;

    assignBiggerNumSmallerNum(num1, num2);

    if (isNegativeNumber(biggerNum) || 
            isNegativeNumber(smallerNum) || 
            typeof(biggerNum) != "number" || 
            typeof(smallerNum) != "number"){
        return "ERROR";
    }

    for (let i = smallerNum; i <= biggerNum; i++){
        sum = sum + i;
    }
    return sum;
};

let biggerNum;
let smallerNum;
//sumAll(10, "90");

// Do not edit below this line
module.exports = sumAll;
