function getUsers(apiUrl) {

    return new Promise((resolve, reject) => {
        const requst = new XMLHttpRequest();

        requst.addEventListener("readystatechange", () => {
            if (requst.readyState === 4 && requst.status === 200) {
                const data = JSON.parse(requst.responseText);
                resolve(data)
            } else if (requst.readyState === 4) {
                reject("Ma'lumot olsihni iloji bo'lmadi")
            }
        })

        requst.open("GET", apiUrl);

        requst.send();
    })
}

async function showUsers() {
    try {
        const res = await getUsers("https://jsonplaceholder.typicode.com/users");
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

showUsers()