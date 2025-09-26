function getuser() {
    return new Promise((resolve, reject) => [
        reject("Reject qabul qilindi va catch blok buni tutip oldi ")
    ])
}

async function run() {
    try {
        // mana shu yerda await promise kutadi reject qabul qilgandan song kodni sinxron qilip yuboradi
        const data = await getuser();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

run()