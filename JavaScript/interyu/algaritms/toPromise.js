/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = function (promise1, promise2) {
    return new Promise(async (resolve, reject) => {
        try {
            const num1 = await promise1
            console.log(num1)
            const num2 = await promise2
            console.log(num2)
            resolve(num1 + num2)
        } catch (error) {
            reject('oxshamadi')
        }
    })
};

const propime1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
const propime2 = new Promise(resolve => setTimeout(() => resolve(5), 60))


addTwoPromises(propime1, propime2)
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

