function getUsers(callback) {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState)
        if (request.readyState === 4 && request.status === 200) {
            callback(request.responseText, undefined)
        } else if (request.readyState === 4) {
            callback(undefined, "Ma'lumot olishni iloji bo'lmadi ")
        }
    })

    request.open('GET', "https://jsonplaceholder.typicode.com/users")

    request.send()
}

console.log(1)
console.log(2)
getUsers((data, err) => {
    console.log("callbackishga tushdi")
    if (data) {
        console.log(data)
    } else {
        console.log(err)
    }
})
console.log(3)
console.log(4)

