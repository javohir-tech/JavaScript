/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let result = ""; // "" "4" "34" "134"
    let carry = 0; // 0 0 0 
    let i = num1.length - 1; //1 0 -1
    let j = num2.length - 1; //2 1 0

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry; // 0  0  0
        if (i >= 0) sum += Number(num1[i]);
        if (j >= 0) sum += Number(num2[j]);
        result = (sum % 10) + result; // 4 34 134
        carry = Math.floor(sum / 10)
        console.log(sum, carry)
        i--;
        j--;
    }
    return result
};

let num1 = "199", num2 = "123"

console.log(addStrings(num1, num2))