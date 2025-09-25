async function getData(id) {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if(!res.ok){
            throw new Error("Foydalanuvchi topilmadi");
        }
        const data =  await res.json();
        console.log(data)
    } catch (error) {
        console.log("Hato ushlap qolindi" , error.message)
    }
}

getData(1000)