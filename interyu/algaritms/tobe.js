/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (num) {
            if (val === num) {
                return true
            } else {
                throw new Error('Not Equal')
            }
        },
        notToBe: function (num) {
            if (val !== num) {
                return true
            } else {
                throw new Error('Equal')
            }
        }
    }
};

try {
    console.log(expect(5).toBe(5));
    console.log(expect(5).notToBe(5));
} catch (error) {
    console.log(error.message)
}

