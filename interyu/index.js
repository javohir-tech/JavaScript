const birinchiPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let natija = "Uddaladim";
        resolve(natija)
    }, 10000)
})

birinchiPromise.then(res => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("birinchi promisedan kelgan habar : " + res)
        }, 5000)
    });
}).then(res => {
    setTimeout(() => {
        console.log("oxirgi natija : " + res)
    }, 5000)
})