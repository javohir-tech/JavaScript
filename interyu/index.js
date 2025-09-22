function getUser(callBack) {
    setTimeout(() => {
        callBack("http so'rovimiz javobi !")
    }, 2000)
}

//callback function
function myFn(response) {
    console.log(response)
}

getUser(myFn)