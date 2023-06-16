const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({

    category:{
        type : string,
        required: true
    }
});

module.exports = mongoose.model("Category",categorySchema);