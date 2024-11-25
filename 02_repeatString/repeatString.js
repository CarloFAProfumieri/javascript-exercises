const repeatString = function(aString, iterations) {
    let timesRepeated = 0;
    let finalString = '';

    if (iterations < 0) {
        return "ERROR";
    }

    while (timesRepeated < iterations) {
        finalString += aString;
        timesRepeated++;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
