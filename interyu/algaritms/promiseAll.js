function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        if(functions.length ===0){
            resolve([]);
            return
        }
        //for off sinxron kod shuning uchun promiselar parallel ishlaydi 
        for (let fn of functions) {
            fn()
                .then(res => {
                    results.push(res);
                    if (res.length === functions.length) {
                        resolve(results)
                    }
                }).catch(err => {
                    reject(err)
                })
        }

        // bu yerda resultni kormoqchi bolsang [] chiqadi sabab asinxron kodlar hali ishlap
        // tugalanmasdan sen resultsni elon qilayapsan 
        // console.log(results)
    })
}

const functions = [
    () => new Promise(res => setTimeout(() => res(4), 3000)),
    () => new Promise(res => setTimeout(() => res(5), 2000))
]

const start = Date.now();

promiseAll(functions)
    .then(res => {
        console.log({ "t": Math.floor(Date.now() - start), "hal qilingan": res })
    }).catch(err => {
        console.log(err)
    })


