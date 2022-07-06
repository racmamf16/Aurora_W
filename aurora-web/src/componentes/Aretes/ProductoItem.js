import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {DataContextAretes} from "../../context/DataAretesProv";

export const ProductoItemAr = ({
id,
title,
price,
image,
category,
    }) =>{

      const value = useContext(DataContextAretes);
      const addCarrito = value.addCarrito;

  return (
        <div className="producto">
      <Link to = {`/producto/${id}`}>
    <div className="producto_img">
      <img src={image} alt={title}/>
      </div>
      </Link>
      <div className="producto_footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price}</p>
      </div>
      <div className="buttom">
        <button className="btn" shape="circle" onClick={() => addCarrito(id)} >
Añadir al carrito
        </button>
        <div>
          
        </div>
      </div>
      </div>
  )
}