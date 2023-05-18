import { TextField } from '@mui/material'
import React, { useState } from 'react'

import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Box from '@mui/material/Box';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login() {

        const user = {
            email,
            password,
        }
        console.log(user);

        try {
           const result = await axios.post('http://localhost:8080/users/login', user)
            .then(res => { 
                localStorage.setItem('user',JSON.stringify(res.data.user));
                console.log('res.data : ',res.data.user);
                navigate('/') // taking user to landing page
            })
            
            console.log(result)
            
        //  const result = await axios.post('http://localhost:8080/users/login', user).data;
        //  console.log(result); // why undefined ?
            toast.success('Login successful'); 


        } catch (error) {
            console.log('error : ',error)
            // toast.error(error)
        }
    }

    //  <TextField id="standard-basic" label="EMAIL" variant="standard" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

    //  <TextField id="standard-basic2" label="PASSWORD" variant="standard" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />

    /*    <TextField
    id="input-with-icon-textfield"
    label="PASSWORD"
    InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <VpnKeyIcon />
            </InputAdornment>
        ),
    }}
    variant="standard" fullWidth
    value={password} onChange={(e) => setPassword(e.target.value)}
/>
*/

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
        <div className='container row' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>



            <div className='form col-md-6 bs mt-3' >

                <h1 style={{ textAlign: "center" }}>LOGIN HERE</h1>


                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="EMAIL"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard" fullWidth
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />   <br />




                    <FormControl sx={{ m: 1 }} variant="standard" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} >
                        <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                        <Input

                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}

                            startAdornment={
                                <InputAdornment position="start">
                                    <VpnKeyIcon />
                                </InputAdornment>
                            }

                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </Box>





                <button className='btn btn-primary mb-3' onClick={login} >LOGIN</button>

            </div>




        </div>
    )
}

export default Login