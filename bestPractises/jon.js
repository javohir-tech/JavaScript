const names = "josh, john, steve";

const arr = names.split(",").map(item => item + "jon").join(",")
console.log(arr)
