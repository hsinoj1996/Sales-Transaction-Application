const express = require("express")
const mongoose = require("mongoose")
const Product = require("../model/Product")


//POST Method
module.exports.productAdd = (req,res) => {
        const addProduct = new Product({
            Name: req.body.Name,
            Price: req.body.Price,
            Description: req.body.Description
        }).save()
          .then((saveProduct) =>{
              if(saveProduct){
                  return res.status(201).json({
                      success: true,
                      message:"successfully added",
                      saveProduct
                  })
              }else{
                  return res.status(406).json({
                      success: false,
                      message:"couldn't added"
                  })
              }
          }).catch((error) =>{
              message:"internal problem",
              error
          })
}

//GET Method
module.exports.productView = (req,res) =>{
    Product.find()
    .then((view) => {
        if(view){
            res.send(view)
        }else{
            res.send("not available details")
        }
    }).catch((error) => {
        res.json({
            message:"internal view error",
            error
        })
    })
}

//EDIT Method
module.exports.productEdit = (req, res) =>{
    const pid = req.params.id;
    const updatedProduct = req.body

    Product.findByIdAndUpdate(
        pid,
        {$set: updatedProduct},
        {useFindAndModify}
    ).then((prodEdit) => {
        if(prodEdit){
            res.status(202).json({
                success: true,
                message:"successfully updated",
                updatedProduct
            })
        }else{
            res.status(304).json({
                success: false,
                message:"could not updated"
            })
        }
    }).catch((error) => {
        res.json({
            message:"internal edit error",
            error
        })
    })
}

//DELETE Method
module.exports.productDelete = (req,res) =>{
    Product.findByIdAndDelete(req.params.id)
                            .then((delProd) =>{
                                if(delProd){
                                    res.json("Product has been Removed")
                                }else{
                                    return res.json("couldn't remove Product")
                                }
                            }).catch((error) => {
                                message:"internal delete error",
                                error
                            })
}

//GET Produt BY ID
module.exports.getProductById = (req,res) => {
    Product.findById({_id: req.params.id})
            .then((requestedProduct) =>{
                if(requestedProduct){
                    res.send({
                        success: true,
                        message:"Successfully Found",
                        requestedProduct
                    })
                }else{
                    res.status(204).json({
                        success: false,
                        message:"no content",
                    })
                }
            }).catch((error) => {
                res.json({
                    message:"internal search problem",
                    error
                })
            })
}

            