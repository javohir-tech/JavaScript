function getUsers(urlApi) {
    return new Promise((resolve, reject) => {
        
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject("Ma'lumot olsihni iloji bo'lmadi")
            }
        })

        request.open("GET", urlApi);

        request.send()
    })
}

async function showusers() {
    try {
        const res = await getUsers("https://jsonplaceholder.typicode.com/users");
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

showusers()