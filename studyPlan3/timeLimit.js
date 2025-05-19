var timeLimit = function (fn, t) {

    return async function (...args) {
        let result 
        const timer = setTimeout(() => {
            result =  fn(...args)
        }, t)
        return new Promise((resolse, reject) => {
            if (timer) {
                clearTimeout(timer)
                resolse(result)
            } else {
                clearTimeout(timer);
                reject('Time Limit Exceeded')
            }
        })
    }
}

const fn = async (x) => {
    await new Promise(resolve => setTimeout(() => { resolve(x) }, 100));
}

const t = 150;

const args = [5];

const limited = timeLimit(fn, t);
limited(args)
    .then(res => {
        console.log("salom")
        console.log(res)
    })
    .catch(err => {
        console.log('alik')
        console.log(err)
    })