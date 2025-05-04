function memoize(fn) {
    const kesh = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (key in kesh) {
            return kesh[key]
        }
        const natija = fn(...args);
        kesh[key] = natija
        return natija
    }
}

let callCount = 0;

const sum = (a, b) => {
    callCount += 1;
    return a + b;
}

const memoizedFn = memoize(sum);

console.log(memoizedFn(3, 2))
console.log(memoizedFn(3, 2))
console.log(memoizedFn(1, 3))
console.log(callCount)