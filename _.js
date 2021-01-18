const _ = {
    clamp(num, lower, upper) {
        const lowerClampedValue = Math.max(num, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(num, start = 0, end) {
        
        if (end === undefined) {
            end = start;
            start = 0;
            if (start <= num && num < end) {
                return true;
            } else {
                return false;
            };
        };
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
            if (start <= num && num < end) {
                return true;
            } else {
                return false;
            };
        };
        let isInRange = (start <= num && num < end);
        return isInRange;
    },
};

// Do not write or modify code below this line.
module.exports = _;
