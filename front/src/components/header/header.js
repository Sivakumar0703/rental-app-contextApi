import React from 'react';
import '../header/header.css'
import {Navigate, useNavigate} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  //console.log(user.userName)
  const navigate = useNavigate();

const logout = () =>{
   localStorage.removeItem('user');
   navigate('/')

}








  return (
    <div className='header'>

      <div className='header-left'>
        <img src='../header/rent.jpeg' alt='logo' />
        <h2>ONLINE RENTAL </h2>
      </div>
      <div className='header-right'>
        {/* checking is there user in local storage means Logged in. if user is there then show his name else show login + register button */}
        {user ? (<>
          <div class="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <AccountCircleIcon />{user.userName}
            </button>
            <ul class="dropdown-menu">
              <li><a className="dropdown-item" href="#">My Cart</a></li>
              <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>
            </ul>
          </div>
        </>)
          : (<>
            <button className='login btn'>LOGIN</button>
            <button className='signup btn'>SIGNUP</button>
          </>)}

      </div>

    </div>
  )
}

export default Header