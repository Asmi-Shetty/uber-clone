 const userModel = require('../models/user.model');
 const userService = require('../services/user.service');
 const {validationResult } = require('express-validator');

 module.exports.registerUser = async (req, res, next) => {

const errors = validatioResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Invalid request', errors: errors.array() });
 }

 console.log(req.body);

 const { fullname , email , password } = req.body;

 //password is not taken in the form of string 
 //therefore we use hash
 const hashedPassword = await bcrypt.hash(password, 10);

 const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword 
 });

 const token = user.generateAuthToken();

 res.status(201).json({ token, user });
}