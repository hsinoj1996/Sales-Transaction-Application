const express = require("express")
const router = express.Router();

const ProductConfig = require("../controller/ProductController")

//routing and api creation
router.post("/api/product/add", ProductConfig.productAdd );
router.get("/api/product/view", ProductConfig.productView);
router.put("/api/product/edit/:id", ProductConfig.productEdit);
router.delete("/api/product/delete/:id", ProductConfig.productDelete);
router.get("/api/product/:id". ProductConfig.getProductById)

module.exports = router;