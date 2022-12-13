/**
 * {roman number: arabic number}
 * @type {Object}
 */
 const romanToArabicDic = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

/**
 * converts roman number to arabic
 * @param {string} romanN - roman number to convert
 * @returns {number} arabic number
 */
const translateRomanToArabic = (romanN) => {
    return romanN.toUpperCase().split('').
        reduce((sum, currNumber, i, romanArr) => {
            if (romanToArabicDic[currNumber] >= romanToArabicDic[romanArr[i + 1] ?
                romanArr[i + 1] : currNumber]) {
                return sum + romanToArabicDic[currNumber];
            } else {
                return sum - romanToArabicDic[currNumber];
            }
        }, 0);
};

/**
 * roman number validation
 * @param {string} inputSymbols - symbols for check
 * @returns {boolean} whether inputSymbols is roman number
 */
const isRoman = (inputSymbols) => {
    if (typeof inputSymbols === 'string' || inputSymbols instanceof String) {
        return /^[MDCLXVI]*$/.test(inputSymbols.toUpperCase());
    } else {
        return false;
    }
};


/**
 * roman number Proxy handler
 */
const romanHandler = {
    get(target, prop, leftBorder) {
        if (isRoman(prop)) {
            const rightBorder = translateRomanToArabic(prop);
            return (leftBorder <= rightBorder ?
                Array.from({length: rightBorder - leftBorder},
                    (_, i) => i + leftBorder) : []);
        } else {
            return target[prop];
        }
    },
};

Object.setPrototypeOf(
    Number.prototype,
    new Proxy(Number.prototype, romanHandler));

console.log(1..VI);
console.log(12..VI);
console.log(0..V); // [0, 1, 2, 3, 4];
console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6];
