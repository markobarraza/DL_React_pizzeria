import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const login = () => {

    const {handleSubmit, mensaje, error, email, password} = useContext(UserContext)



    
  return (
    <div className='container col-4 my-5'>
        <p className= {error}>{mensaje}</p>
      <form className="formulario" onSubmit={handleSubmit}>
            <div className="form-group mt-3">
                <label>Email</label>
                <input
                type="text"
                name="email"
                className="form-control"
                {...email}
                // onChange={ (e)=> setEmail(e.target.value) }
                // value={email}
                />
            </div>
            <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                type="text"
                name="password"
                className="form-control"
                {...password}
                // onChange={ (e)=> setPassword(e.target.value) }
                // value={password}
                />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Enviar</button>
        </form>
    </div>
  )
}

export default login
