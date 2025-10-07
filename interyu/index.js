function getUser(url) {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data)
            } else if (request.readyState === 4) {
                reject('Malumotlarni olishni iloji bolmadi')
            }
        })

        request.open('GET', url)

        request.send()
    })

}

const showUsers = async () => {
    try {
        const res = await getUser('https://jsonplaceholder.typicode.com/users');
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

showUsers()



