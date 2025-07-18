const obj_1 = {
    age: 21
}

const obj_2 = Object.assign({} , obj_1)
obj_2.age = 22 ;
 
console.log(obj_1.age)
console.log(obj_2.age)

