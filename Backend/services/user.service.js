const userModel = require('../models/user.model');


//accepts firstname,lastname, email,password in the form of object 
module.exports.createUser = async({
}) => {
    if (!firstname || !email || !password){
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}