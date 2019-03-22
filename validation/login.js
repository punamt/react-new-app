const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){

    let errors = {};
    
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
   

    

    if(validator.isEmpty(data.email)) {
        errors.email ='Email field is required';
    }

    if(!validator.isEmail(data.email)) {
        errors.email ='Email is not valid';
    }
    
    if (!validator.isLength(data.password,{min : 2,max:30})){
        errors.password = 'password must be between 2 and 30 characters';
    }
    if(validator.isEmpty(data.password)) {
        errors.password ='password field is required';
    }
    
    return{
        errors,
        isValid: isEmpty(errors)
    }
}