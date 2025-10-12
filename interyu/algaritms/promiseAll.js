function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = 0;
        //Bu asinxron funksiya bu sinxron funksiyalar bajaarilaayotgan 
        //  vaqtda callback queue da tayyorlanayotgan boladi 
        // shuning uchun ham loop tugaganidan keyin result yoki countni holatini ko'rmoqchi bolsang boshlangich holatda boladi
        // bu funksiya callback queue dan qaytganda result yoki countni sen elon qilgan qismiga 
        // ozgartirish kirita olmaydi sabab sen bu funksiya baajarilip qaytip kelguncha 
        // ularni elon qilgansan 
        for (let fn of functions) {
            fn()
                .then(res => {
                    result.push(res)
                    count++
                    if (count === functions.length) {
                        resolve(result)
                    }
                }).catch(err => reject)
        }
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


