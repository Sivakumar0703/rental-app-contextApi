const userRouter = require("express").Router();
const userModel = require('../models/user.model'); // using the user collection
const { hashPassword, hashCompare,createToken } = require('./authorization.controller');

// user/signup

//userName,email,mobile,password,role

userRouter.get('/',async(req,res)=>{
    try {
        let user = await userModel.find();
        res.status(200).json({user,message:"done"})
    } catch (error) {
        res.send({message:"unable to get user data",error})
    }
})

userRouter.post('/signup', async (req, res) => {
   
//const newUser = new User(req.body)
    try {

        let hashedPassword = await hashPassword(req.body.password)
        req.body.password = hashedPassword

        let user = await userModel.findOne({ email: req.body.email })
        
        if (!user) {
            let user = await userModel.create(req.body);// get data from body(front end)
            res.status(201).json({
                message: "Signup successfull"
            })
            

        } else {
            res.status(400).json({ message: "user already exist!" })
        }

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error
        })

    }

})

// login
/*
userRouter.post('/login', async (req, res) => {

    try {
        let user = await userModel.findOne({ email: req.body.email });

        if (user) {
            if(await hashCompare(req.body.password , user.password)){
                res.status(200).json({
                    message: "Signup successfull"
                })
            } else {
                res.status(400).json({ message: "invalid password" })
            }
            // let hashedPassword = await hashPassword(req.body.password);
            // req.body.password = hashedPassword
            
          //  console.log(user);
        } else {
            res.status(400).json({ message: "user doesn't exists" })
        }


    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error
        })

    }

})
*/

userRouter.post('/login', async (req, res) => {
// const {email , password} = req.body
console.log('login starts')
    try {
        
        let user = await userModel.findOne({ email: req.body.email });

        if (user) {
            
            if(await hashCompare(req.body.password , user.password)){
                //create token
                let token = await createToken({
                    userName:user.userName,
                    email:user.email,
                    id:user._id,
                    role:user.role
                })
             /*   let obj = {
                   'email':  user.email,
                   'role':  user.role,
                   
                } */
                res.status(200).json({
                    message: "Login successfull",
                    token,
                   // obj
                    user  // here password is also send to the client
                    
                })
                
            } else {
                res.status(400).json({ message: "invalid password" })
            }
        } else {
            res.status(400).json({ message: "user doesn't exists" })
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
            
        })

    }

})







module.exports = userRouter;
