/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    return this.length ? this[this.length - 1] : -1;
};


const arr = [null, {}, 3]
console.log(arr.last()); // 3
