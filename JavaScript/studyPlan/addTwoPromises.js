/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    const a = await promise1;
    const b = await promise2;
    return a + b
};

const promise1 = new Promise(resolve => setTimeout(() => { resolve(2) }, 2000));
const promise2 = new Promise(resolve => setTimeout(() => { resolve(5) }, 6000));

addTwoPromises(promise1, promise2).then(console.log)


/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */