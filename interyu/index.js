// 1. javaScript sixron ishlagani uchun hamma funksiyalar va kodlar dastlap call stckga tushadi 
// 2. lekin asinxron kodlar bu yerda emas wep apida (brauzer yoki node js taqdim qiladi) ishlaydi va callback
//queue ga tushadi 
// 3. hullas event loop asinxron kodni olip call stackda emas web api da ishlaydi 
// va callback queue da natigani saqlaydi call stack bo'shagandan keyin call  stackga olip keladi 
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