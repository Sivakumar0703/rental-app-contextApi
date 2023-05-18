const express = require("express");
const app_server = require("./app");
//const cors = require('cors');
const router = express.Router();

//https://webcodetwo.onrender.com/
const  node_server= express()

const port = 8080;


node_server.use("/",app_server);
//node_server.use(cors());


//node_server.use(express.json());

node_server.use("/",router);

router.get('/', function(req, res) {
  try {
    res.status(200).json({message:`<h1> Wlecome to Express </h1>`})
  } catch (error) {
    res.status(400).json({message:error})
  }
});

node_server.listen(port , ()=>console.log(`server started at port ${port}`));


module.exports =router;