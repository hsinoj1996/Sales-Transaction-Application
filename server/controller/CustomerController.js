const express = require("express")
const mongoose = require("mongoose")
const User = require("../model/Customer")

const bcrypt = require("bcryptjs")

//POST Method
module.exports.customerRegister = (req,res) => {
    
    const register = new User({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Password: req.body.Password,
        Confirm_Password: req.body.Confirm_Password,
        Gender: req.body.Gender,
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

//GET Method
module.exports.customerView = (req,res) =>{
    User.find() 
     .then((view)=>{
         if(view){
             res.status(302).send({
                 view
             })
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
