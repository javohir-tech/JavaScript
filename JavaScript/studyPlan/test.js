let val = 0
console.log(val)


function log(a, b) {
    return ()=>{
        val = a+b
        console.log(val)
    }
}
let a = 2;
let b = 3;

const sum = log(a, b)

const result = setTimeout(sum, 2000)


