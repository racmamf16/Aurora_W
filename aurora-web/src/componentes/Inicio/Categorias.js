import React from 'react';
import Aretes from '../../images/ARETES.png';
import Brazaletes from '../../images/BRAZALETES.png';
import Collares from '../../images/CC.png';
import Anillos from '../../images/ANILLOS.png';
import {DataContext} from "../../context/Dataprovider";
import {Link} from "react-router-dom";

function Categorias(){
    return(
<>
<h1 className="title">CATEGORIAS</h1>
<div className="productosCat">

    <a href="Aretes">
    <div className="productoCat">
        <img src={Aretes} alt=""/>
        <br/>
    </div>
    </a>
    
    <a href="Brazaletes">
    <div className="productoCat">
        <img src={Brazaletes} alt=""/>
        <br/>
    </div>
    </a>

    <a href="Anillos">
    <div className="productoCat">
        <img src={Anillos} alt=""/>
        <br/>
    </div>
    </a>

    <a href="Collares">
    <div className="productoCat">
        <img src={Collares} alt="/Collares"/>
        <br/>
    </div>
    </a>
    </div>
</>
    );
}
export default Categorias;