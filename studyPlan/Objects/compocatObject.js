function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)           // Har bir elementni rekursiv tozalaymiz
            .filter(Boolean);             // Faqat truthy qiymatlarni qoldiramiz
    } else if (obj !== null && typeof obj === 'object') {
        const result = {};
        for (let key in obj) {
            const compacted = compactObject(obj[key]); // chuqur tozalash uchun  // null , [false , 1] => [1]
            console.log(obj[key])
            if (
                (typeof compacted === 'object' && compacted !== null && Object.keys(compacted).length > 0) ||
                (typeof compacted !== 'object' && Boolean(compacted))
            ) {
                result[key] = compacted;
            }
            // console.log(compacted)

        }
        return result;
    } else {
        return obj;
    }
}

// console.log(compactObject([null, 0, false, 1])); 
console.log(compactObject({ "a": null, "b": [false, 1] }));
// console.log(compactObject([null, 0, 5, [0], [false, 16]])); 
