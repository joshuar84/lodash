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

    dropWhile(array, predicate) {
        const arrCopy = array.slice();
        for (let i = 0; i < array.length; i++) {
            let elem = array[i];
            let index = i;
            if (predicate(elem, index, array)) {
                arrCopy.shift();
            } else {
                break;
            };
        };
        return arrCopy;
    },

    chunk(array, size = 1) {
        let chunkedArray = [];
        let i = 0;
        while (i < array.length) {

            let arr = [];
            let j = 0;

            while (j < size) {
                if (array.length === i) {
                    break;
                }
                let elem = array[i];
                arr.push(elem);
                j++;
                if (j !== size) {
                    i++;
                };
            };

            chunkedArray.push(arr);
            i++;
            
        }
        return chunkedArray;
    },
};

// Do not write or modify code below this line.
module.exports = _;
