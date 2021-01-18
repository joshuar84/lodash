const _ = {
    clamp(num, lower, upper) {
        if (num < lower) {
            return Math.max(num, lower);
        } else if (num > upper) {
            return Math.min(num, upper); 
        } else {
            return num;
        };
    },


};





// Do not write or modify code below this line.
module.exports = _;