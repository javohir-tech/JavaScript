/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (char of s) {
        if (char === '(' || char === '[' || char === '{'){
            stack.push(char)
        }else{
            if(stack.length === 0 ||  stack.pop() !==  map[char]){
                return false
            }
        }
    }
    return stack.length === 0
};

const s = "()"


console.log(isValid(s))

