
import Home from './components/Home';
// import Login from './components/Login'
// import Register from './components/Register';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Pizza from './components/Pizza';
// import productos from './pizzas.json'
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <Navbar/>  
      <Header/>
      {/* <Cart productos={productos}/> */}
      {/* <Home/>   */}
      <Pizza/>
      {/* <Register/>   */}
      {/* <Login/>   */}
      <Footer/>  
    </>
  )
}

export default App
