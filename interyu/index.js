function getUsers(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(request.responseText)
            } else if (request.readyState === 4) {
                reject('Ma\'lumot olishni iloji bo\'lmadi')
            }
        })

        request.open('GET', url);

        request.send();
    })
}

const showUsers = async () => {
    try {
        const res = await getUsers('./Todos/suvonov.json');
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}

showUsers()