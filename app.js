const express = require("express");
const app_server = express();

const productRouter = require("./controllers/product.controller");
//const bodyParser = require("body-parser");
const userRouter = require("./controllers/user.controller");
const cartRouter = require("./controllers/cart.controller")
//const indexRouter = require("./index")
const cors = require('cors')

require("./dbconfig");


//middleware

app_server.use(cors());
app_server.use(express.json());
//app_server.use(bodyParser.urlencoded({extended:true}));
//app_server.use(bodyParser.json());


// routes
app_server.use("/products" , productRouter);


app_server.use("/users",userRouter);

app_server.use("/cart",cartRouter);



module.exports = app_server;