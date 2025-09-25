function getUsers(callback) {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState)
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(data, undefined)
        } else if (request.readyState === 4) {
            callback(undefined, "Ma'lumot olishni iloji bo'lmadi ")
        }
    })

    request.open('GET', "user.json")

    request.send()
}

getUsers((data, err) => {
    if (data) {
        console.log(data)
    } else {
        console.log(err)
    }
})

