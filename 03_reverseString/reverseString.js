const reverseString = function(aString) {
    let length = aString.length;
    let reversedString = ''
    while (length >= 0) {
        reversedString = reversedString.concat('',aString.charAt(length));
        length--;
    }
    return reversedString;
};
// Do not edit below this line
module.exports = reverseString;
