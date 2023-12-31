const noteModel = require("../models/note");
// const categoryModel = require("../controllers/categoryController");
// const category = require("../models/category");

 
const createNote = async (req,res) =>{
   // console.log(req.userId);
    const {CatId,Todo,Inprogress,Done,StartOn,Duration} = req.body;
    console.log(req.body);

    const newNote = new noteModel({
        CatId : CatId,
        Todo : Todo,
        Inprogress : Inprogress,
        Done : Done,
        StartOn : StartOn,
        Duration : Duration,
        // EndOn : EndOn,
        userId : req.userId  
    });

    try {
        await newNote.save(); 
        res.status(201).json(newNote);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({message : "Something Went Wrong"});
    }
}


const updateNote = async (req,res) =>{

    const id = req.params.id;
    const {title, description} = req.body;

    const newNote = {
        title : title,
        description : description,
        userId : req.userId  
    };

    try{
       await noteModel.findByIdAndUpdate(id, newNote, {new : true});
       res.status(200).json(newNote);

    }catch(error)
    {
        console.log(error);
        res.status(500).json({message : "Something Went Wrong"});

    }

}

const deleteNote = async (req,res) =>{
    
    const id = req.params.id;
    try{

        const note = await noteModel.findByIdAndRemove(id);
        res.status(202).json(note);

    }catch(error)
    {
        console.log(error);
        res.status(500).json({message : "Something Went Wrong"});
            
            
    }
}

const getNotes = async (req,res) =>{

    try{
        const notes = await noteModel.find({userId : req.userId});
        res.status(200).json(notes);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message : "Something Went Wrong"});
    }
    
}

module.exports = {
    createNote, updateNote, deleteNote, getNotes
}