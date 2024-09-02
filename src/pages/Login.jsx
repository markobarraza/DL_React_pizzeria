import React, { useState } from 'react'

const login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [mensaje, setMensaje] = useState("")
    const [error, setError] = useState ("")


    const validador = (e)=> {
        e.preventDefault()

        if (!email.trim() || !password.trim()) {
            setMensaje("Debe llenar todos los campos")
            setError("mensaje_error")
            return
            
        }else if (password.length < 6){
            setMensaje("la contraseña debe contener minimo 6 caracteres")
            setError("mensaje_error")
            return
        }
            setMensaje("Felicitaciones")
            setError("mensaje_exito")
            
            // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
            setEmail ("")
            setPassword ("")
    }

    
  return (
    <div className='container col-4 my-5'>
        <p className= {error}>{mensaje}</p>
      <form className="formulario" onSubmit={validador}>
            <div className="form-group mt-3">
                <label>Email</label>
                <input
                type="text"
                name="email"
                className="form-control"
                onChange={ (e)=> setEmail(e.target.value) }
                value={email}
                />
            </div>
            <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                type="text"
                name="password"
                className="form-control"
                onChange={ (e)=> setPassword(e.target.value) }
                value={password}
                />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Enviar</button>
        </form>
    </div>
  )
}

export default login
