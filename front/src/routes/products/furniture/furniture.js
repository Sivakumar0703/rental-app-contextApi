import React, { useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import '../furniture/furniture.css';

const Furniture = () => {
    useEffect(()=>{
         fetch('http://localhost:8080/products')
         .then((res) => res.json())
         .then((result) => console.log(result));
    },[])
  return (
    <div>
{/* 
    <div className="card">
      <img src="..." className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some </p>
        <button className="btn btn-primary cart-btn "><AddShoppingCartIcon /></button>
      </div>
    </div> */}
    
        </div>
  )
}

export default Furniture