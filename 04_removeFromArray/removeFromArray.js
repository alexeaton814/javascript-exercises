const removeFromArray = function(array, ...args) {
    let newArr = [];
    array.forEach(element => {
        numInstances = 0;
        args.forEach((arg) => {
            if (arg === element){
                numInstances++;
            }
            else {
                //do nothing
            }
        })
        if (numInstances == 0){
            newArr.push(element);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
