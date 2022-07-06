import React from 'react'
import Slidesshow from './Slidesshow';
import Video from './VideoJS';
import Categorias from './Categorias';

import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Inicio = () =>{
  return(
    <div class="fondo">
    <div className ="inicio">
    <main>
      <Slidesshow/>
    </main>
    <Categorias/>
    <br/>
    <br/>
   <Video/>
    <br/>
    </div>
    </div>
  )
}
