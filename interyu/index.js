const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getUsers(method, url, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) resolve(xhr.response);
            else reject({ status: this.status, statusText: this.statusText });
        }

        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: this.statusText
            })
        }

        xhr.send(body)
    })
}

getUsers('GET', apiUrl)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })