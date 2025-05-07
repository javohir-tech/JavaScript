/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const prom1 = await promise1;
    const prom2 = await promise2;
    return prom1+ prom2
};

const promise1 = new Promise(resolve => setTimeout(()=>resolve(2), 1000))
const promise2 = new Promise(resolve => setTimeout(()=>resolve(2), 2000))

addTwoPromises(promise1, promise2).then(console.log)

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */