const express = require("express");
const router = express.Router();

const customerConfig = require("../controller/CustomerController");

//routing and api creation
router.post("/api/register", customerConfig.customerRegister)
router.get("/api/view", customerConfig.customerView);
router.put("/api/edit/:id", customerConfig.customerEdit)

//login api
router.post("/api/login", customerConfig.customerLogin);

module.exports = router;
