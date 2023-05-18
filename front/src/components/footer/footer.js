import React from 'react';
import '../footer/footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-starts'>
        

<div className='ONLINE-RENT'>
    <h4>ONLINE-RENT</h4>
    <p>About us</p>
    <p>Careers</p>
    <p>Contact</p>
    <p>Location</p>
    <p>Rent Your Products</p>
</div>

<div className='POLICIES'>
<h4>POLICIES</h4>
    <p>Cancellation & Return</p>
    <p>Privacy Policy</p>
    <p>Terms & Condition</p>
</div>

<div className='icons'>
<h4>FOLLOW US</h4>
<FacebookIcon className='icon'/>
<TwitterIcon className='icon'/>
<InstagramIcon className='icon'/>
</div>







        </div>








        <div className='footer-ends'></div>












    </div>
  )
}

export default Footer