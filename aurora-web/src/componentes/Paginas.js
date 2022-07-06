import React from "react";
import {Switch,Route} from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Collares/index";
import {Conocenos} from "./Conocenos/index";
import {Aretes} from "./Aretes/index";

export const Paginas  =()   =>{
  return (
    <section>
      <Switch>
<Route path ="/" exact component ={Inicio} />
<Route path ="/Collares" exact component ={ProductosLista} />
<Route path ="/conocenos" exact component ={Conocenos} />
<Route path ="/Aretes" exact component ={Aretes} />
      </Switch>
    </section>
  )
}