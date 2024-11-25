const sumAll = function(startingNumber, endingNumber) {
    let sum = 0;
    let swapAux = 0;

    if (endingNumber < 0 || startingNumber < 0 || notInteger(startingNumber) || notInteger(endingNumber)) {
        return "ERROR"
    }

    if(endingNumber < startingNumber){
        swapAux = startingNumber;
        startingNumber = endingNumber;
        endingNumber = swapAux;
    }

    for (let i = startingNumber; i <= endingNumber; i++) {
        sum += i;
    }
    return sum;
};

function notInteger(aNumber){
    let aNumberRounded = Math.floor(aNumber);
    return !(aNumberRounded === aNumber);
}

// Do not edit below this line
module.exports = sumAll;
