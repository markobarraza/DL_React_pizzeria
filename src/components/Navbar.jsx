import React from 'react'
import { miles } from '../utils/number'

function Navbar() {
    const total = 25000;
    const token = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                {
                    token ? (
                        <>
                        <a className="nav-link active" aria-current="page" href="#">Profile</a>
                        <a className="nav-link" href="#">Logout</a>
                        </>
                    ):(
                        <>
                        <a className="nav-link" href="#">Login</a>
                        <a className="nav-link" href="#">Register</a>
                        </>
                    )
                }
            </div>
            </div>
            <a className="nav-link justify-content-end" href="#">Total ${miles(total)} </a>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
