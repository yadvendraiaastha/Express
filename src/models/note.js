const mongoose = require("mongoose");
const { addcategory } = require("../controllers/categoryController");
// const CatId = require(addcategory);
const NoteSchema = mongoose.Schema({

    CatId : {
        type : String,
        trim : true,
        required:true
    },
    Todo : {
        type : String,
        trim : true,
        required :"Title cannot be blank"
    },
    Inprogress : {
        type : String,
        trim : true,
        required:true
    },
    Done : {
        type : String,
        trim : true,
        required:true
    },
    StartOn : {
        type : Date,
        default : new Date(),
        required:true
    },
    Duration : {
        type : Number,
        trim : true,
        required:true
    },

    // EndOn : {
    //     type : Date,
    //     default : Date.now(),
    //     required:"Must have end date-default valueis created date+30 minuts "
    // },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }

}, {timestamps : true});

module.exports = mongoose.model("Note",NoteSchema);