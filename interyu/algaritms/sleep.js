/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve , millis));
    return new Promise((resolve=>{
        resolve()
    }))
}

let t = Date.now();
sleep(100)
    .then(() => console.log(Date.now() - 100))
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */