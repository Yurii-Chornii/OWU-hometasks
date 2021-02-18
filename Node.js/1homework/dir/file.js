const var22 = 22;

function createUser(name, age){
    logger(`Hello, my name is ${name} and I am a ${age} years old`)
}
function logger(string){
    console.log(string)
}

module.exports = {
    var22,
    createUser
}

exports.test = 'Noda!';
