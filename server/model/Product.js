const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema({
    Name:{
        type: String,
        required: true
    },
    Price:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    }
})

module.exports = Product = mongoose.model("product", productSchema)