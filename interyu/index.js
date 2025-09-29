function getUsers(apiURl) {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 400) {
                const data = JSON.parse(request.responseText);
                resolve(data)
            } else if (request.readyState === 4) {
                reject("Ma'lumotlarni olishni iloji bo'lmadi")
            }
        })

        request.open('GET', apiURl);

        request.send();

    })
}

getUsers('./Todos/suvonov.json')
    .then(res =>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })