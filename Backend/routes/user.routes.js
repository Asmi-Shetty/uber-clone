const express = require('express');
const router = express.Router();
const {body}  = require("express-validator")
const userController = require('../controllers/user.controller'); 

//iss particular route pe jo bhi data aaega usko validate karenge express-validator se
 
router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('first name must be atleast 3 characters long'),
    body('password').isLength({min: 6}).withMessage('password must be atleast 5 characters long')
],
userController.registerUser
)



module.exports = router;
 