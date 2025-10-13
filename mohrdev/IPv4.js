function IPv4(ip) {
    const err = "Notog'ri manzil"
    if (!/[0-9.]+$/.test(ip)) {
        return `${err} : IP manzil raqamlar va nuqtalardan iborat bo'lishi kerak `
    }

    const parts = ip.split(".");
    if (!parts.length === 4) {
        return `${err} : IP manzil 4 ta bo'limdan iborat bo'lishi kerak `
    }

    for (let part of parts) {
        const num = Number(part);
        if (num === "" || isNaN(num) || num < 0 || num > 255) {
            return `${err} : IP manzil 0 va 255 orasida bo'lishi kerak `
        }
    }

    const protectedIP = ip.replace(/\./g, '[.]');

    const binaryIP = parts.map(num => Number(num).toString(2).padStart(8, '0')).join('.')

    return {
        original: ip,
        protected: protectedIP,
        binary: binaryIP
    }
}

const api = "1.1.1.1"

console.log(IPv4(api))

