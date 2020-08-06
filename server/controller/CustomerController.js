const express = require("express")
const mongoose = require("mongoose")
const User = require("../model/Customer")

const bcrypt = require("bcryptjs")
const keys = require("../configuration/keys")
const jwt = require("jsonwebtoken");

const customerValidation = require("../validation/registerValidation")

//POST Method
module.exports.customerRegister = (req,res) => {
    
    const {errors, isValid} = customerValidation(req.body);

    if(!isValid){
        return res.json(errors)
    }
    //checking if email is already registered or not
    User.findOne({Email: req.body.Email}).then((isCheck) =>{
        if(isCheck){
            res.json({
                message:"already registered"
            })
        }else{
            const register = new User({
                Firstname: req.body.Firstname,
                Lastname: req.body.Lastname,
                Password: req.body.Password,
                Confirm_Password: req.body.Confirm_Password,
                Email: req.body.Email
            });
            bcrypt.genSalt(10, (error, salt) =>{
                bcrypt.hash(register.Password, salt, (err, hash) => {
                    if(err){
                        res.json({
                            err
                        })
                    }else{
                        register.Password = hash;
                        register.save()
                        .then((savedCustomer)=>{
                            if(savedCustomer){
                                res.status(201).json({
                                    success: true,
                                    message: "Account Successfully Created!!!",
                                    savedCustomer
                                })
                            }else{
                                res.status(406).json({
                                    message:"Cannot Created"
                                })
                            }
                        }).catch((error)=>{
                            message:"internal error",
                            error
                        })
                    }
                })
            })
        }
    })
}

//GET Method
module.exports.customerView = (req,res) =>{
    User.find() 
     .then((view)=>{
         if(view){
            res.send(view)
         }
     })
}

//PUT Method
module.exports.customerEdit = (req,res) =>{
    const cid = req.params.id;
    const updatedCustomer = req.body


    console.log(cid);
    console.log(updatedCustomer);

    User.findByIdAndUpdate(
        cid,
        {$set: updatedCustomer},
        {useFindAndModify:false}
    ).then((userEdit)=>{
        console.log("editied user", userEdit);
        if(userEdit){
            res.status(202).json({
                success:true,
                message:"Successfully updated",
                updatedCustomer
            })
        }else{
            res.status(304).json({
                success:false,
                message:"could not updated"
            })
        }
    }).catch((error)=>{
        error
    })
}

//LOGIN Method
module.exports.customerLogin = (req,res) =>{
    const Email = req.body.Email;
    const Password = req.body.Password

    User.findOne({Email}).then((isLoggedIn) =>{
        bcrypt.compare(Password, isLoggedIn.Password).then((isMatched) =>{
            if(isMatched){

                //loading data into payload
                const payload = {
                    id:isLoggedIn.id,
                    Email: isLoggedIn.Email
                }
                //signing in the web with secret keys,datas and expiretime
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {expiresIn:36000},
                    (err,token) =>{
                        res.status(201).json({
                            success: true,
                            message: "Login Successfully",
                            token: "Bearer " + token,
                        })
                    }
                )
               
            }else{
                res.json({
                    success:"false",
                    message:"Your email or password does not match"
                })
            }
        })
    }).catch((error)=>{
        message:"internal login error",
        error
    })
}
