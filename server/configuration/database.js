const mongoose = require("mongoose");


//establishing database connection with mongodb atlas
mongoose.connect(
  (mongoURI = "mongodb+srv://admin:admin@cluster0.stbjl.mongodb.net/SalesTransaction"),
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database is ready!!! ");
  }
);
