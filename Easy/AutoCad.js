// const list = [87.97,90.53,94.37,99.95,108.21,121.09,143.76,137.92]
// const burchak = [10.5,  16.1,  22.12,  28.46,  34.6,  41.35,  48.99,  59
// ]

// const balandlik  = [55.48,  101.75,  137.79,  161.96,  171.56,  161.72,  122.09,  95.13
// ]

// const natija = []
// for (let i=0 ; i< balandlik.length ; i++){
//     let sum = ((balandlik[i]+(balandlik[i-1] || 0))*list[i])/2
//     natija.push(sum.toFixed(2))
// }

// console.log(natija)

s = [1616.98,  7117.02,  11302.69,  14980.01,  18045.10,  20178.44,  20400.26,  14979.49
 ] ;
deg = [10.5,  16.1,  22.12,  28.46,  34.6,  41.35,  48.99,  59];
let  res = []
for (let i = 0 ; i<s.length ; i++) {
    summa = (s[i]*Math.sin(deg[i]*Math.PI/180)).toFixed(2)
    res.push(summa)
}

console.log(res)

// const natija = [
//   '1589.90',  '6837.88',
//   '10470.78', '13169.68',
//   '14853.58', '15147.71',
//   '13386.46', '7715.01'
// ]

// console.log(natija.reduce((acc , curr)=> acc+= Number(curr) , 0))