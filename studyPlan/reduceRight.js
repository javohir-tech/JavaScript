const arr = [1, 2, 3]

const result = arr.reduceRight((acc, val)=>{
    console.log(`acc : ${acc} , val : ${val}`)
    return acc+val
} , 0)

console.log(result)