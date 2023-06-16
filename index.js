// // const express = require('express');
// // const app = express();

// // app.get('/',(req,res) => {
// //     res.send("hello");
// // }).listen(5000)


// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//     res.send("hello home page");
// });

// app.get('/example',(req,res) => {
//     res.send("this is example page");
// });

// app.get('/about',(req,res) => {
//     res.send("this is about page");
// });

// app.get('/help',(req,res) => {
//     res.send("this is help page");

// });

// app.listen(2500);

const express = require('express');
const app = express();

const userRouter = require("./src/routes/userRoutes");
//const noteRouter = require("./routes/noteRoutes");

app.set("/users",userRouter);
app.set("/note",noteRoute);

app.get("/",(req,res) => {
    res.send('hello');
});

app.listen(5300,()=>{
    console.log("server started on the port number.5300");    
});

