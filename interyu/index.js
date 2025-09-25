const internet = true;

function getData() {
    return new Promise((resolve, reject) => {
        if (internet) {
            resolve("Some Data")
        } else {
            reject("Some Error")
        }
    })
}

getData()
    .then((res) => {
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })