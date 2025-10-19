var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const len = gcd(str1.length, str2.length);
    return str1.slice(0, len)
};

const str1 = "ABABAB"
const str2 = "AB"

console.log(gcdOfStrings(str1, str2));