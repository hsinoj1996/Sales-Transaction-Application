import { Add_Product, Get_Product } from "./types"
import axios from "axios"

//Add Product

export const addProduct = productData => dispatch =>{
    axios
         .post("/api/product/add", productData)
         .then((productData) => {
             dispatch({
                 type: Add_Product,
                 payload: productData
             })
         })
}

//View Product
export const getProduct = () => dispatch =>{
    axios   
         .get("/api/product/view")
         .then((viewProduct) =>{
             dispatch({
                 type: Get_Product,
                 payload: viewProduct.data
             })
         })
}