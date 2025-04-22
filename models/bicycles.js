const mongoose = require("mongoose")
const bicyclesSchema = mongoose.Schema({
    bicycles_type: {
        type: String,
        required: [true, "Bicycles type is required"],
        minlength: [3, "type must be At least 3"]
    },
    brand: {
        type: String,
        required: [true, "Bicycles brand is required"],
        minlength: [2, "type must be At least 2"]
    },
    price: {
        type: Number,
        required: [true, "Bicycles price is required"],
        min: [2, "type must be At  least 2"],
    },

})
module.exports = mongoose.model("bicycles",bicyclesSchema)