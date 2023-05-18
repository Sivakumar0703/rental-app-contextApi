import { TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

import { toast } from 'react-toastify';

const Register = () => {

const[userName , setUserName] = useState('');
const[email , setEmail] = useState('');
const[mobile , setMobile] =useState('');
const[password , setPassword] = useState('');
const[confirmpassword , setConfirmpassword] = useState('');


async function signup(){
  
    
    if(password === confirmpassword){
        const user = {
        userName,
        email,
        mobile,
        password,
        confirmpassword
    }
    console.log(user);

try {
 
    const result = await axios.post('http://localhost:8080/users/signup' , user).data
     
     toast.success('Registration successful');
} catch (error) {
    console.log(error)
}




    } else {
     alert('password not matched with the confirm password')
    
  }  
}


  return (
    <div className='container row' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

      

      <div className='form col-md-6 bs' >

      <h1 style={{textAlign:"center"}}>REGISTER HERE</h1>

      <TextField id="outlined-basic1" label="USER NAME" variant="outlined" fullWidth margin="normal" value={userName} onChange={(e)=>setUserName(e.target.value)}/> <br />

      <TextField id="outlined-basic2" label="EMAIL" variant="outlined" fullWidth margin="normal" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />

      <TextField id="outlined-basic3" label="MOBILE NUMBER" variant="outlined" fullWidth margin="normal" value={mobile} onChange={(e)=>setMobile(e.target.value)} /> <br />

      <TextField id="outlined-basic4" label="PASSWORD" variant="outlined" fullWidth margin="normal" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />

      <TextField id="outlined-basic5" label="CONFIRM PASSWORD" variant="outlined" fullWidth margin="normal" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} />

      <button className='btn btn-primary mb-3' onClick={signup} >REGISTER</button>

      </div>




    </div>
  )
}

export default Register