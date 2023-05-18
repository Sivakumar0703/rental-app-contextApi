import React ,{createContext,useContext,useState,useEffect} from 'react'
import axios from 'axios'
import HomePage from '../routes/products/home/homePage';


 const Context = createContext();

export default function Contextapi() {


 const [product, setProduct] = useState([]);




 useEffect(() => {

    async function getProductData() {
      try {
        const data = (await axios.get('http://localhost:8080/products')).data

      //  console.log(data.products[1].name)
        setProduct(data.products)
       // setLoading(false)

      } catch (error) {
        console.log(error)
     //   setLoading(false)
      }
    }
    getProductData();

  }, [])



  return (
  
    <Context.Provider
       value = {[product]} >
        

        <HomePage />

    </Context.Provider>

  )
}

export const ContextState = () => {
    return useContext(Context)
}
