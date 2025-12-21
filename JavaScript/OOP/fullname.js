function fullName(name, surname, middlename = '') {
    if (middlename) {
        return `${middlename} ${surname} ${name}`
    }else{
        return `${surname} ${name}`
    }
}

export {fullName}