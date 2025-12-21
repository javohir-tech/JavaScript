
const p1 = new Promise((resolve, reject) => setTimeout(() => reject('p1'), 3000))
const p2 = new Promise(resolve => setTimeout(() => resolve('p2'), 4000))

const promises = [p1, p2]

Promise.all(promises)
    .then(results => {
        console.log(results)
    }).catch(error => {
        console.log(`Hatolik : ${error}`)
    })

Promise.race(promises)
    .then(res => {
        console.log(res)
    }).catch(error => {
        console.log(`xatolik ${error}`)
    })

Promise.any(promises)
    .then(res => {
        console.log(res)
    }).catch(error => {
        console.log(`Xatolik : ${error}`)
    })

Promise.allSettled(promises)
    .then(res => {
        console.log(res)
    }).catch(error => {
        console.log(`Xatolik : ${error}`)
    })