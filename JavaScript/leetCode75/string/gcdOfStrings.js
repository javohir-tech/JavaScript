function gdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = b % a;
        a = temp;
    }

    return a
}

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ""
    }

    const len = gdc(str1.length , str2.length);
    return str1.slice(0, len)
}

str1 = "ABCABC", str2 = "ABC"
console.log(gcdOfStrings(str1 , str2))