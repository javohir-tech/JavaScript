let obj = {
    name: "Javohir",
    exec : function(){
        console.log(this.name)
    }
}

const method1 = Object.assign({}, obj);
const method2 = JSON.parse(JSON.stringify(obj));
const method3 = {...obj}

console.log(method1)
console.log(method2)
console.log(method3)