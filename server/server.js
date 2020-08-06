//importing database configuration
require("./configuration/database")

const express = require("express");
const app = express();
const bodyParser = require("body-parser")

/**
 * Intiliazing port to run server
 * Local manaul port initiate
 * Environment port dynamically
 */
const port = process.env.PORT || 5000;

//importing router thereby middleware can implement it
const customer = require("../server/router/CustomerAPI")
const product = require("../server/router/ProductAPI")

app.get("/",(req,res)=>{
    res.send("hello server");
})

app.listen(port,()=>{
    console.log("server is setup");
});

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customer)
app.use(product);