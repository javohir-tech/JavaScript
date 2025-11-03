
const p1 = new Promise((resolve, reject) => setTimeout(() => reject('p1'), 3000))
const p2 = new Promise(resolve => setTimeout(() => resolve('p2'), 4000))

Promise.allSettled([p1, p2])
    .then(results => {
        console.log(results)
    }).catch(error=>{
         console.log(`Hatolik : ${error}`)
    })