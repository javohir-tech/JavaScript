function parseFn(str) {
    try {
        return JSON.parse(str)
    } catch (error) {
        console.log("format notogri" + error);
        null;
    }
}

console.log(parseFn('{"name":"Ali"}'))
console.log(parseFn('{"name":"Ali"}'))