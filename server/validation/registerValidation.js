const Validator = require ("validator");
const isEmpty = require("./isEmpty")

const errorValid = customerData =>{
    let errors = {};

    customerData.Firstname = !isEmpty(customerData.Firstname) ? customerData.Firstname:"";
    customerData.Lastname = !isEmpty(customerData.Lastname) ? customerData.Lastname:"";
    customerData.Password = !isEmpty(customerData.Password) ? customerData.Password:"";
    customerData.Confirm_Password = !isEmpty(customerData.Confirm_Password) ? customerData.Confirm_Password:"";
    customerData.Email = !isEmpty(customerData.Email) ? customerData.Email:"";

    if(Validator.isEmpty(customerData.Firstname)){
        errors.Firstname = "Firstname is required"
    }
    if(Validator.isEmpty(customerData.Lastname )){
        errors.Lastname = "Lastname is required";
    }

    if(Validator.isEmpty(customerData.Password )){
        errors.Password = "Password is required";
    }

    if(Validator.isEmpty(customerData.Confirm_Password )){
        errors.Confirm_Password = "Confirm_Password is required";
    }
    if(customerData.Password != customerData.Confirm_Password){
        errors.message = "Password donot matches"
    }


    if(Validator.isEmpty(customerData.Email )){
        errors.Email = "Email is required";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = errorValid