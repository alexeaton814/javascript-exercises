/*> Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years (such as 1800 and 1900) 
unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 
(Yes, it's all pretty confusing)
*/

const leapYears = function(inputYear) {
    switch (true) {
        case (inputYear % 400 == 0):
            return true;
            break;
        case ((inputYear % 4 == 0) && (inputYear % 100 != 0)):
            return true;
            break;
        case (inputYear % 100 == 0):
            return false;
            break;
        default:
            return false;
    }
};

//leapYears(1996);

// Do not edit below this line
module.exports = leapYears;
