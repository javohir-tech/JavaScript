function getUsers(apiUrl) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState)
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject("Ma'lumot olishni iloji bo'lmadi ")
            }
        })

        request.open('GET', apiUrl)

        request.send()
    })

}

getUsers("./Todos/user.json")
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

// getUsers("./Todos/user.json", (data, err) => {
//     console.log(data, "user")
//     getUsers("./Todos/javohir.json", (data, err) => {
//         console.log(data, "javohir")
//         getUsers("./Todos/suvonov.json", (data, err) => {
//             console.log(data, "suvonov")
//         })
//     })
// })

