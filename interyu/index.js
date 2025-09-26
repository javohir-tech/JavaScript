function getUser(apiUrl) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject("Ma'lumot olishni iloji bo'lmadi ")
            }
        });

        request.open("GET", apiUrl);

        request.send();
    })

}


// async/await

async function showUsers() {
    try {
        const user = await getUser("https://jsonplaceholder.typicode.com/users");
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

showUsers()

//then catch
// getUser("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//Calback hell
// getUser("https://jsonplaceholder.typicode.com/users", (res, err) => {
//     console.log(res)
//     getUser("./Todos/javohir.json", (res, err) => {
//         console.log(res);
//         getUser("./Todos/suvonov.json", (res, err) => {
//             console.log(res)
//             getUser("./Todos/user.json", (res, err) => {
//                 console.log(res)
//             })
//         })
//     })
// })


