import React, {useContext} from "react";
import {DataContextAretes} from "../../context/DataAretesProv";
import {ProductoItemAr} from "./ProductoItem";

export const Aretes = () => {

  const value = useContext(DataContextAretes)
  const [productos] = value.productos
  console.log(productos)

  return (
    <>
    <h1 className="title">PRODUCTOS</h1>
    <div className="productos">
      {productos.map((producto) =>(
          <ProductoItemAr
          key={producto.id} 
          id={producto.id}
          title={producto.title}
          price={producto.price}
          image={producto.image}
          category={producto.category}
          cantidad={producto.cantidad}
          />
        ))}
      </div>
    </>
  );
};