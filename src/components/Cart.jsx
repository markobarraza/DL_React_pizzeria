import React from 'react'
import { useState } from 'react'
import { miles } from '../utils/number'

const Cart = ( {productos} ) => {
    
    const [carrito, setCarrito] = useState ([])
    let total = carrito.reduce( (acumulador, productos)=> acumulador += productos.count, 0 )
    let totalPagar = carrito.reduce( (acumulador, productos)=> acumulador += (productos.price * productos.count), 0 )


    const incrementar = (productos)=>{
     let itemCarrito = carrito.findIndex(item => item.id === productos.id)
     let nuevoProducto = {desc:productos.desc, id:productos.id, img:productos.img, name:productos.name, price:productos.price, count:0}
     console.log(itemCarrito);
     console.log(nuevoProducto);
     
     if(itemCarrito >= 0){
            carrito[itemCarrito].count++
            setCarrito( [...carrito] )
        }else{
            setCarrito( [...carrito,nuevoProducto] )
        }
    }

    const decrementar = (productos)=> {
        let itemCarrito = carrito.findIndex(item => item.id === productos.id)

        if (itemCarrito >= 0) {
            const nuevoCarrito =  [...carrito]
            if (nuevoCarrito[itemCarrito].count > 1 ) {
                nuevoCarrito[itemCarrito].count--
            }else{
                nuevoCarrito.splice(itemCarrito, 1)
            }
            setCarrito(nuevoCarrito)
        }else{

        }
    }

    const obtenerCantidad = (producto) => {
        const itemEnCarrito = carrito.find((item) => item.id === producto.id);
        return itemEnCarrito ? itemEnCarrito.count : 0;
    }


  return (
    <>
    
    <div className='container'>
        <h2>Cantidad de Pizzas:{total} </h2>
        <h2>Total a Pagar:${miles(totalPagar)} </h2>
        <div className='row d-flex align-items-center justify-content-center'>
            {productos.map((productos)=> (
                <div className="card m-2 col-4" key={productos.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src= {productos.img} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{productos.name}</h5>
                            <p className="card-text">Precio: $ {miles(productos.price)}</p>
                            <p className="card-text"><small className="text-body-secondary">Cantidad: {obtenerCantidad(productos)}   </small></p>
                            <button onClick={ ()=> incrementar(productos) } type="button" className="btn btn-success">Agregar</button>
                            <button onClick={ ()=> decrementar(productos) } type="button" className="btn btn-danger ms-2 ">Eliminar</button>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      </>
  )
}

export default Cart
