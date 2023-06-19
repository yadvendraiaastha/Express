const express = require('express');
const upload = require("express-fileupload");

const app = express();

const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes'); 

//const dotenv = require("dotenv");
const cors = require("cors");

//dotenv.config();

const mongoose = require("mongoose");
const categoryRoute = require('./routes/categoryRoute');

app.use(express.json());

app.use(cors());

app.use(upload());


app.use("/users",userRouter);
app.use("/note",noteRouter);
app.use("/category",categoryRoute);



// app.get("/",(req,res) => {
//     res.send('Task Manager');
// });

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/",(req,res) => {
    if(req.files)
    {
        console.log(req.files);
    }
});



//const PORT = process.env.PORT || 3200;

mongoose.connect("mongodb+srv://yadvendrayadav2003:iaastha12@cluster1.5lvtm3i.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    app.listen(3200, ()=>{
        console.log("Server started on the port number: 3200" ); 
    });
})
.catch((error) => {
    console.log(error);
})

// app.listen(3200, ()=>{
//     console.log("Server started on the port number:  3200");    
// });

