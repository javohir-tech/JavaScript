

function seyHello(){
    return function(){
        return "Hello"
    }
}

const result = seyHello()
console.log(result())

// console.log(seyHello(Hello , "Javohir"))