Array.prototype.groupBy = function (fn) {

    const result = {};
    
    for (let i = 0; i < this.length; i++) {
        res = fn(this[i]);
        if(res in result){
            result[res].push(this[i])
        }else{
            result[res] = [this[i]]
        }
    }

    return result
}

const arr = [ 
  [1, 2, 3], 
  [1, 3, 5], 
  [1, 5, 9] 
] 

function fn(obj) {
    return String(obj[0])
}

console.log(arr.groupBy(fn))

// const obj = {
//     name: 'javohir'
// }

// console.log(!'name' in obj)

