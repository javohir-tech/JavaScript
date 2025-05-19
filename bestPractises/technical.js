// console.log(typeof NaN)

// console.log(0.1 + 0.2 === 0.3)

// console.log([1, , 2, 3] + [4, 5])

// console.log(undefined === undefined)

// const set = new Set();

// set.add(1)
// set.add(2)
// set.add(2)
// set.add("salom")
// console.log(set)

const arr = [1, 2, 2, 3, 4, 4, 5];

const unique = [... new Set(arr)]
console.log(unique)