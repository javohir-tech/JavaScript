const user = {
    get name(){
       return this._name
    },

    set name(value){
        if(value.length< 4){
            console.log("this name too short ");
            return
        }
        this._name =  value;
    }
}

// user.name = "Javohir";
// console.log(user.name);
user.name = "";
console.log(user.name)

