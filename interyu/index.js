let myAge = 21;

const ages = [21, 23, 24, 34, 19];

const doubleAges = ages.map((item, index, array) => {
   return item *= 2;
    console.log(array)
})

console.log(doubleAges)