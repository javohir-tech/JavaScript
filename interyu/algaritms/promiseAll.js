function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0
        if (functions.length === 0) {
            resolve([]);
            return
        }



        functions.forEach((fn, index) => {
            fn()
                .then(res => {
                    results[index] = res // index bilan promiselarni tartiplab qaytardik bir biridan qancha oldin qaytgan bolsa ham 
                    count++

                    if(count === functions.length){
                        resolve(results)
                    }
                }).catch(err=>  reject(err))
        });
    })
}

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

const start = Date.now();

promiseAll(functions)
    .then(res => {
        console.log({ "t": Math.floor(Date.now() - start), "hal qilingan": res })
    }).catch(err => {
        console.log(err)
    })


