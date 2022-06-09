const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://epj:epj_2708@cluster0.uklfn.mongodb.net/nearby?retryWrites=true&w=majority"
    )
};

module.exports = connect;