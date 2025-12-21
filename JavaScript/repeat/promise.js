var addTwoPromices = async function (promice1, promice2) {
    const promp1 = await promice1;
    const promp2 = await promice2;
    return promp1 + promp2
}
// const start = Date.now()
const promse1 = new Promise(resolve => setTimeout(() => resolve(5), 30))
const promse2 = new Promise(resolve => setTimeout(() => resolve(2), 40))

addTwoPromices(promse1, promse2)
    .then(console.log)