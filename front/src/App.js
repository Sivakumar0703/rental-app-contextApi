
import './App.css';

//import Header from './components/header/header';
// import Footer from './components/footer/footer';
// import Search from './components/search/search';
// import Categories from './components/categories/categories';
// import Furniture from './routes/products/furniture/furniture';
import {BrowserRouter  , Route ,  Routes} from 'react-router-dom';
// import Landing from './routes/products/LandingPage/landing';
// import Layout from './components/layout/layout';
import HomePage from './routes/products/home/homePage';
import Electronics from './routes/products/electronics/electronics';
import Cart from './routes/products/cart/cart';
import Register from './routes/products/register/register';
import Login from './routes/products/login/login';




// <Route path="/landing"  element={<Landing />} />

function App() {



















  return (
    <div className="App">
       {/* <Header />
       <Search />
       <Categories />
       <Furniture />
       <Footer />
       
       
       */}



<BrowserRouter>

<Routes>

  <Route path='/' element={<HomePage />}/>
  


<Route path='/electronics' element={<Electronics />} />

<Route path='/cart/:productId' element={<Cart />} />

<Route path='/register' element={<Register />} />

<Route path='/login' element={<Login />} />

</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;

