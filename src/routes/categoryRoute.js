const express = require("express");
const categoryRoute = express();

const bodyParser = require("body-parser");
categoryRoute.use(bodyParser.json());
categoryRoute.use(bodyParser.urlencoded({extended:true}));

const auth = require("../middlewares/auth");

const categoryController = require("../controllers/categoryController");

categoryRoute.post("/",auth,categoryController.addcategory);

module.exports = categoryRoute;
