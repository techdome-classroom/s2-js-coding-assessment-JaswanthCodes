/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Define a map to store the values of Roman numerals
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        if (currentVal < nextVal) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }

    return result;
};

module.exports = { romanToInt };
