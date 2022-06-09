const mongoose = require("mongoose");
const restaurentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {}
},
{
    versionKey: false,
    timestamps: false
}
);

module.exports = mongoose.model("restaurent",restaurentSchema)