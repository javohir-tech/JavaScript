var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; // ← bu joyda xato chiqayapti deysan
    }
    digits.unshift(1);
    return digits;
};

let digits = [9, 9, 9];
console.log(plusOne(digits));
