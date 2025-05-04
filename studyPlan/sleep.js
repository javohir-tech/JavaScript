/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
   return new Promise(resolve => setTimeout(resolve , millis))   
}
console.log("boshlandi")


let t = Date.now()
sleep(2000).then(() => console.log(Date.now() - t)) // 100
