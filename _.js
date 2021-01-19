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
            }
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
            if (start <= num && num < end) {
                return true;
            } else {
                return false;
            }
        }
        let isInRange = start <= num && num < end;
        return isInRange;
    },

    words(string) {
        const arrayOfWords = string.split(" ");
        return arrayOfWords;
    },

    pad(string, length) {

        const sLength = string.length;
        const difference = length - sLength;

        const spacer = (num) => {
            let array = [];
            for (let i = 0; i < num; i++) {
                array.push(" ");
            }
            return array.join("");
        };

        if (sLength > length) {
            return string;
        };

        if (sLength % 2 === 1 || length % 2 === 1) {
            const strtPad = Math.floor(difference / 2);
            const endPad = Math.ceil(difference / 2);
            return spacer(strtPad) + string + spacer(endPad);
        };

        const padding = difference / 2;
        return spacer(padding) + string + spacer(padding);
    },

    has(obj, path) {
        if (obj[path] === undefined) {
            return false;
        } else if (obj[path] !== undefined) {
            return true;
        }
    },

    invert(obj) {
        const newObj = {};
        for (let key in obj) {
            let newKey = obj[key];
            let newVal = key;
            newObj[newKey] = newVal;
        };
        return newObj;
    },

    findKey(obj, keyOrPFunc) {
        if (typeof keyOrPFunc === 'function') {
            for (let key in obj) {
                if (keyOrPFunc(obj[key])) {
                    return key;
                };
            };
            for (let key in obj) {
                let val = obj[key];
                if (val === keyOrPFunc) {
                    return key;
                };
            };
        };
        return undefined;
    },

    drop(array, num = 1) {
        const dropCount = 0 + num;
        return array.slice(dropCount);
    },
};

// Do not write or modify code below this line.
module.exports = _;
