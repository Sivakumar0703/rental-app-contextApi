const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const secretKey = "nefl$CJ*KLJDK#@bnK" ;





const hashPassword = async(password)=>{
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword
}


const hashCompare= async(password,hashedPassword)=> { // password = req.body.password(from Application) & hashedPassword = user.password(from DB)
    return await bcrypt.compare(password,hashedPassword)

}

const createToken = async(payload) => { // name,email,id,role
   
    let token = await jwt.sign(payload,secretKey)
   
    return token
}

// const validate = async(req,res,next)=>{
//     console.log(req.headers.authorization)
//     if(true){
//         let token = req.headers.authorization.split(" ")[1];
//         let data = await jwt.decode(token); // jwt.decode => conver token into payload(name,email,id,role)
//         console.log(data);
//         if(Math.floor((+new Date())/1000) < data.exp) {
//         next() } else {
//             res.status(402).json({message:"token expired"})
//         }
//     } else {
//         res.status(400).json({message:"token not found"})
//     }
// }




// const adminLogin = async(req,res,next)=>{   // admin password: A454%ab
//     if(req.headers.authorization){ 
//     let token = req.headers.authorization.split(' ')[1]; 
//     let data = await jwt.decode(token);
//     if(data.role === 'admin')  
//      next()
//     else
//     res.status(401).send({message:"token expired"})
//     }
//     else{
//     res.status(400).send({message:"token not found"})
//     }
// }



module.exports = {hashPassword,hashCompare,createToken}