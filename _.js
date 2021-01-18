const _ = {
    clamp(num, lower, upper) {
        if (lower <= num && num <= upper) {
            return num;
        };
        if (num < lower) {
            return lower;
        };
        if (num > upper) {
            return upper;
        };
    },

    
};





// Do not write or modify code below this line.
module.exports = _;