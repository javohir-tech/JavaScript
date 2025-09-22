const arr = [1, 2, 3]

// arr.forEach( async (el) => {
//     await new Promise(r=>setTimeout(r , 1000))
//     console.log(el)
// })

for(const el of arr){
    await new Promise(r=>setTimeout(r, 1000));
    console.log(el)
}