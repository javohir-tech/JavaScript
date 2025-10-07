function getUser(url, callback) {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(request.responseText)
        } else if (request.readyState === 4) {
            console.log('Malumotlarni olishni iloji bolmadi')
        }
    })

    request.open('GET', url)

    request.send()

}
getUser('https://jsonplaceholder.typicode.com/users', (data) => {
    console.log(data)
    getUser('./Todos/javohir.json', (data) => {
        console.log(data)
    })
})



