var compose = function (funks) {
    return function(x){
        return funks.reduceRight((acc , fn)=> fn(acc) , x)
    }
}
const funksiyalar = [x => x + 1, x => x * x, x => 2 * x]
const x = 4
const res =  compose(funksiyalar);
console.log(res(x))