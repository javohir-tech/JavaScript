function isValidCardNumber(number) {
    const digits = String(number).split('').map(Number).reverse()
    const sum = digits.reduce((acc, d, i) => {
        if (i % 2 === 1) {
            d *= 2;
        }
        if (d > 9) d -= 9;
        return acc + d
    }, 0);

    return sum % 10 === 0
}

const base12 = '491699030503';
const result = []
for (let i = 0; i < 1000; i++) {
    const middle3 = String(i).padStart(3, '0');
    for (let j = 0; j <= 9; j++) {
        const full = base12 + middle3 + j
        if(isValidCardNumber(full)){
            result.push(full)
        }
    }
}

console.log(result);
