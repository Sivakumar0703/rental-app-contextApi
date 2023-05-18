import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../cart/cart.css'
import Loading from '../../../components/loading/loading'



const Cart = () => {
  const { productId } = useParams()

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {

    async function getData() {
      try {
        const data = (await axios.post('http://localhost:8080/products/getProductById', { productId: productId })).data // user defined value: productId(from params)
        setProduct(data.product)
        setLoading(false)
       

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getData();

  }, [])



  return (
    <div>

      <h1>cart page</h1>

      {loading ? <h1><Loading /></h1> : (<div>


        <div className='row container cart-page'>

          <div className='col-md-10 img-section d-flex '>

         
          <div> <img src={product.image} alt={`${product.name}`} className='cart-img'/></div>

            <div className='col-md-6 cart-detail'>

              <h1>Cart Detail</h1>
              <hr />
              <h5>Name :  </h5>
              <h5>From : </h5>
              <h5>To : </h5>

             <div className='payment-section'>

               <h1>Payment Section</h1> <hr />
               <p>Total days : </p>
               <p>Total hours : </p>
               <p>Cost per hour : </p>
               
              <div className='cart-pay-btn'> <button className='btn btn-primary'>Pay</button> </div>


             </div>
           











            </div>

          </div>

        </div>

      </div>)}

    </div>
  )
}

export default Cart