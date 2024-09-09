import React from 'react'
import { miles } from '../utils/number'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
    const {totalPagar} = useContext(CartContext)
    const token = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">Home </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                {
                    token ? (
                        <>
                        <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/logout">Logout</Link>
                        </>
                    ):(
                        <>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                        </>
                    )
                }
                <Link className="nav-link" to="/pizza">Pizza</Link>
                <Link className="nav-link" to="/cart">Cart</Link>
            </div>
            </div>
            <Link className="nav-link justify-content-end" to="/cart">Total ${miles(totalPagar)} </Link>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
