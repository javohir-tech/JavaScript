

const mainObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}

const copyObj = Object.assign({} , mainObj)
copyObj.a = 13
console.log(copyObj)
console.log(mainObj)