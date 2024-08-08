import React from 'react'

function CardPizza(props) {

  return (
    <>
      
          <div className="card col-3 mx-2 p-0">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Pizza {props.name}</h5>
              <p className="card-text"> {props.ingredients.join(", ")} </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: ${props.price} </li>
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
