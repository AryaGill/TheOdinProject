const sumAll = function(start, end) {
    let sum = 0;
    if (Math.sign(start)==-1 || Math.sign(end)==-1) {
        return "ERROR";
    } else if (typeof start =="string" || typeof end == "string"){
        return "ERROR";
    }
    else if (start<end) {
        for (let i = start; i <= end; i++) {
                sum+=i;
        }
    } else if (start>end){
        for (let i = end; i <= start; i++) {
            sum+=i;
        }
    } else {
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
