async function sleep(millis) {
    return await new Promise(resolve => setTimeout(resolve, millis))
}

const millis = 100;
const start = Date.now();
sleep(millis).then(() => {
    console.log(Date.now() - start)
})