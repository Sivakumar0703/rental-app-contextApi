/*
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout/layout';
import axios from 'axios';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../LandingPage/landingPage.css';
import Electronics from '../electronics/electronics';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../LandingPage/landingPage.css'
import HomePage from '../home/homePage';
import Button from 'react-bootstrap/Button';
import Cart from '../cart/cart';
// import Modal from 'react-bootstrap/Modal';
// import HomePage from '../home/homePage';


const Landing = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);



  //const data =  fetch('https://webcodetwo.onrender.com/products').then((res) => res.json()).then((result)=>setProduct(result));


  useEffect(() => {

    async function getData() {
      try {
        //  const data = (await axios.get('https://webcodetwo.onrender.com/products')).data
        const data = await axios.get('https://webcodetwo.onrender.com/products').then((res) => console.log(res))
        console.log(data.products)
        setProduct(data.products)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getData();

  }, [])


  console.log(product)

  return (

    <Layout>



      {loading ? <h1>loading</h1> : (product.map((a) => {



        return <HomePage userdata={a} key={a._id} />












      }))}


    </Layout>
  )
}

export default Landing


*/
