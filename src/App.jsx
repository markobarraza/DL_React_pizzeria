
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Pizza from './pages/Pizza';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import productos from './pizzas.json'
import CartProvider from './context/CartContext';


function App() {
  

  return (
    <>
      <CartProvider>
        <Navbar/>  
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart productos={productos}/>} />
          <Route path='/pizza' element={<Pizza/>} />
          <Route path='/register' element={<Register/>  } />
          <Route path='/login' element={<Login/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        <Footer/>  
      </CartProvider>
    </>
  )
}

export default App
