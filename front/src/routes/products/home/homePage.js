import React, { useState, useEffect } from 'react'
import '../home/homePage.css'
import Layout from '../../../components/layout/layout'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//today
import axios from 'axios';
import Loading from '../../../components/loading/loading';
import { DatePicker, Space } from 'antd'; // date picker
import moment from 'moment';
import { ContextState } from '../../../context/context';




const HomePage = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //today
const [product] = ContextState()

 // const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { RangePicker } = DatePicker;
/* 
  useEffect(() => {

    async function getData() {
      try {
        const data = (await axios.get('http://localhost:8080/products')).data

        console.log(data.products[1].name)
        setProduct(data.products)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getData();

  }, []) */

  // dates is automatically passed by RangePicker
  // dates give two moment | format is a moment function
  function filterByDate(dates) {
    console.log(dates[0].$d)
    console.log(dates[1].$d)
    console.log(moment(dates[0].$d).format())
    console.log(moment(dates[1].$d).format())
  }

  return (

    <Layout>


      <div className='row'>

        <div className='col-md-3'>

          <Space direction="vertical" size={12}>
            <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
          </Space>


        </div>

      </div>


      <h1>homepage </h1>
      {/* today */}
      { (product.map(data => {

        return (

          <div className="card bs product-con today " key={data._id}>
            <img src={data.image} className="card-img-top card-img" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <Link to={`/cart/${data._id}`}><button className="btn btn-primary cart-btn "><AddShoppingCartIcon /></button></Link>
              <button className="btn btn-primary cart-btn " onClick={handleShow} ><VisibilityIcon /></button>

              <Modal show={show} onHide={handleClose} className='modal'>
                <Modal.Header >
                  <Modal.Title>{data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={data.image} className='modal-img' alt='product img' /></Modal.Body>
                <Modal.Body><b><p>DESCRIPTION</p></b>{data.description}</Modal.Body>
                <Modal.Body><b><p>PRICE/hr</p></b><span>₹</span>{data.price}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>

                </Modal.Footer>
              </Modal>

            </div>



          </div>)



      }))}


    </Layout>
  )
}

export default HomePage