const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    Firstname: {
        type: String,
        required: true,
      },
      Lastname: {
        type: String,
        required: true,
      },
      Password: {
        type: String,
        required: true,
      },
      Confirm_Password: {
        type: String,
        required: true,
      },
      Gender: {
        type: String,
        required: true,
      },
      Email: {
        type: String,
        required: true,
 
      }
})
module.exports = Customer = mongoose.model("customer",customerSchema)