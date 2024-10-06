import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {

  const {userMail} = useContext(UserContext)

  return (
    <div className='container col-3 my-5 text-center'>
      <div>
        {userMail ? (
          <p>Email: {userMail.email}</p>
        ) : (
          <p>porfavor inicie sesion otra vez</p>
        )}
      </div>
      <button className='btn btn-primary btn-lg m-3'>Cerrar sesión</button>
    </div>
    
  )
}

export default Profile
