const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());
app.use("/users",userRouter);
app.use("/note",noteRouter)


app.get("/",(req,res) => {
    res.send('Task Manager');
});

const PORT = process.env.PORT || 3200;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT, ()=>{
        console.log("Server started on the port number: " + PORT); 
    });
})
.catch((error) => {
    console.log(error);
})

// app.listen(3200, ()=>{
//     console.log("Server started on the port number:  3200");    
// });

