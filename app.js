// //1111111111111111
// //bby default request take by server and send response


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

// app.listen(3000);

// //222222222222222222222222222222222
// //original req send by client 

// ///////////////////////////////
// const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');

// const app = express();
// dotenv.config({path:"config.env"})
// const PORT = process.env.PORT || 8080

// app.use(morgan('tiny'));

// app.get('/',(req,res) => {
//     res.send("Task Manager");
// });
// app.listen(PORT,()=> {console.log('Server is running on http://localhost:${PORT}')});


process.env.MONGO_URL
process.env.PORT || 3200