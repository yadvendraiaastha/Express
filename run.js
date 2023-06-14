const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');

//const mongoose = require("mongoose");

app.set("/users",userRouter);
app.use("/note",noteRouter)


app.get("/",(req,res) => {
    res.send('Task Manager');
});

// mongoose.connect("mongodb+srv://yadvendrayadav2003:<iaastha@12>@cluster0.wght4mn.mongodb.net/?retryWrites=true&w=majority")
// .then(() => {
//     // app.listen(3200, ()=>{
//     //     console.log("Server started on the port number:  3200"); 
// })
// .catch((error) => {
//     console.log(error);
// })

app.listen(3200, ()=>{
    console.log("Server started on the port number:  3200");    
});

