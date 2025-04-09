const mongoose = require("mongoose")
const bicyclesSchema = mongoose.Schema({
bicycles_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("bicycles",
bicyclesSchema)