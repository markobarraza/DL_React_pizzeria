import React from 'react'

function CardPizza( {productos} ) {

  return (
    <>
      
          <div key={productos.id} className="card col-3 m-2 p-0">
            <img src={productos.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Pizza {productos.name}</h5>
              <p className="card-text"> {productos.ingredients.join(", ")} </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: ${productos.price} </li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Ver mas</a>
              <a href="#" className="card-link">Añadir</a>
            </div>
          </div>
        
    </>
  )
}

export default CardPizza
