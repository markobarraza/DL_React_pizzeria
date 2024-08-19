import React from 'react'
import CardPizza from './CardPizza'

function Home( {productos} ) {
  
  return (
    <>
    <div className='my-5 row d-flex align-items-center justify-content-center'>

      {productos.map( (productos) => (
        <CardPizza productos = {productos} />
      ) )}

    </div>
    </>
  )
}

export default Home
