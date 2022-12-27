const reverseString = function(str) {
    var no = str.length;
    var reversed = '';
    for (let i = no-1; i >= 0; i--) {
        reversed = reversed.concat(str[i]);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
