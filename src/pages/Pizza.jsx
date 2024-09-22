import React from 'react'
import { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import { useParams } from 'react-router-dom'

const Pizza = () => {
    
    const [pizza, setPizza] = useState({})
    const {id} = useParams()
    console.log(id)
    
    
    const consultarApi = async ()=>{
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        console.log(data);
        setPizza(data)
    }

    useEffect ( ()=>{
        consultarApi()
      }, [] )


  return (
    
    <>
    <div className='my-5 row d-flex align-items-center justify-content-center'>
        {pizza.id && <CardPizza productos = {pizza} />}
    </div>
    </>
  );
}

export default Pizza
