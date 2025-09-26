function getUsers(apiUrl) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject("Ma'lumotlarni olishni iloji bo'lmadi")
            }
        })

        request.open("GET", apiUrl);

        request.send()
    })
}

console.log(1)
console.log(2)
// getUsers("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => [
//         console.log(err)
//     ])

async function showusers() {
    try {
        const data = await getUsers("https://jsonplaceholder.typicode.com/users");
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

showusers()
console.log(3)
console.log(4)

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange" ,()=>{
//     console.log(request , request.readyState)
// })

// request.open('GET' , "https://jsonplaceholder.typicode.com/users");

// request.send()


// 1
// 2 open yuborildi
// 3 loading
// 4 tayyor

// getUsers("./Todos/user.json", (data, err) => {
//     console.log(data, "user")
//     getUsers("./Todos/javohir.json", (data, err) => {
//         console.log(data, "javohir")
//         getUsers("./Todos/suvonov.json", (data, err) => {
//             console.log(data, "suvonov")
//         })
//     })
// })

