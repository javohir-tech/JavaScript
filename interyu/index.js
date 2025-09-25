const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Hammsi yaaxshi")
    } else {
        reject("xatolik")
    }
})

async function getDat() {
    try {
        const res = await myPromise;
        console.log("natija : " ,  res)
    } catch (error) {
        console.log(error)
    }
}
getDat()