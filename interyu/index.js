function copy(mainObj){
    const copyObj = {};
    for(let key in mainObj){
        copyObj[key] =  mainObj[key]
    };

    copyObj.a = 1
    return copyObj
}

const mainObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}

console.log(copy(mainObj), "nusxalangan object")