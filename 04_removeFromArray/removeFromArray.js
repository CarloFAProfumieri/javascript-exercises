const removeFromArray2 = function(anArray, anItem = "") {
    let length = anArray.length;
    for (let i = 0; i < length; i++) {
        if (anArray[i] === anItem) {
            anArray.splice(i, 1);
            i--;
        }
    }
    return anArray
};
const removeFromArray = function(anArray, anItem, aSecondItem = "", aThirdItem = "", aFourthItem = "") {
    anArray = removeFromArray2(anArray, anItem);
    anArray = removeFromArray2(anArray, aSecondItem);
    anArray = removeFromArray2(anArray, aThirdItem);
    anArray = removeFromArray2(anArray, aFourthItem);
    return anArray;
};
// Do not edit below this line
module.exports = removeFromArray;
