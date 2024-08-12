
import Header from './components/Header';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login'
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
      <Navbar/>  
      <Header/>  
      {/* <Home/>   */}
      {/* <Register/>   */}
      <Login/>  
      <Footer/>  
    </>
  )
}

export default App
