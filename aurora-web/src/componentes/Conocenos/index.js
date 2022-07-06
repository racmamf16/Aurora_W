import React from 'react'
import Portada from "../../images/inicio.png";
import IMG from "../../images/ubicacion.png";

import {Link} from "react-router-dom";

export const Conocenos = () => {
  return (
    <div clasName="inicio">
      
      <div class="fondo">
      <p class="centrado">
      <img src={Portada} alt="inicio"/>
      </p>
      <h1 className="title">Quienes somos</h1>
      <div className ="description_qs">
      <p>Aurora es una tienda en línea con las tedencias y estilos más actuales,nuestras joyas aportan un toque único a tu look debido a que son tan especiales como tú lo eres para nosotros. </p>
      <h1 className="title">Por qué son especiales?</h1>
      <p>Nuestras piezas son elegidas con mucho amor y dedicación acorde a las tendencias de moda con el fin de elevar tu estado de ánimo ya que nuestra misión además de hacerte brilllar es hacerte sonreir.</p>
      </div>
      <br/>
      <p className="ubicacion">DÓNDE NOS PUEDES ENCONTRAR</p>
      <br/>
      <p class="centrado_de">
      <div className ="producto_de">
        <img src={IMG} alt=""/>
          </div>
          </p>
          <br/>
          <div className ="descripcion_ub">
          <p>Avenida del Trabajo 4000, Barrio Alto 2da Sección, 42800</p> 
          <p>Tula de Allende Hidalgo</p>
          </div>
          </div>
      </div>
  )
}
