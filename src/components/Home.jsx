import React from 'react'
import { useEffect, useState } from 'react';
import CardPizza from './CardPizza'

function Home() {

  const [pizzas, setPizzas] = useState([])

  
  const consultarApi = async ()=>{
    const url = 'http://localhost:5000/api/pizzas';
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data)
  }

  useEffect ( ()=>{
    consultarApi()
  }, [] )

  return (
    <>
    <div className='my-5 row d-flex align-items-center justify-content-center'>

      {pizzas.map( (productos) => (
        <CardPizza productos = {productos} />
      ) )}

    </div>
    </>
  )
}

export default Home
