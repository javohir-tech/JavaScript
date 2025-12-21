function logged(text) {
    const cleared = text.replace(/\s+/g, " ").replace(/[!.?,]/g, '').trim().split(" ")
    const res = cleared[cleared.length - 1]
    return {
        text: text,
        lastWord: res,
        length: res.length
    }
}

const text = 'salom dunyo ! ? . ,';

console.log(logged(text))

// let x = '           salom     dunyo                      !  ';
// let arr = x.replace(/\s+/g, " ").trim().split(' ')
// console.log(arr)