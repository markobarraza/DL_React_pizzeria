
import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
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
import { UserContext } from './context/UserContext';


function App() {
  const {user} = useContext(UserContext);

  return (
    <>
    
      <CartProvider>
        <Navbar/>  
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart productos={productos}/>} />
          <Route path='/pizza/:id' element={<Pizza/>} />
          <Route path='/register'
           element={ user ? <Register/> : <Navigate to= "/"/>  } />
          <Route path='/login'
           element={ user ? <Login/> : <Navigate to= "/"/>} />
          <Route path='/profile'
             element={ user ? <Profile/> : <Navigate to= "/login" /> } />
        </Routes>
        <Footer/>  
      </CartProvider>
      
    </>
  )
}

export default App
