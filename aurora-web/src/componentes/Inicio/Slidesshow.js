import React,{useRef, useEffect} from 'react';
import img1 from '../../images/MV.png';
import img2 from '../../images/PN.png';
import img3 from '../../images/TM.png';
import {ReactComponent as FlechaIzquierda} from '../../images/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from '../../images/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components';


const Slidesshow = () =>{
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);
    const siguiente = () =>{
        //comprobamos si el slideshow tiene elementos
       if(slideshow.current.children.length > 0){
            //obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];

             //establecemos la transición para el slideshow
             slideshow.current.style.transition = `8000ms ease-out all`;

             const tamSlide = slideshow.current.children[0].offsetWidth;

             //Mover el slideshow
             slideshow.current.style.transform = `translateX(-${tamSlide}px)`;

            const transicion =() =>{
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }
             slideshow.current.addEventListener('transitionend', transicion);
        }
    }
    
    const anterior = () =>{
        console.log('anterior');
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length -1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            
            slideshow.current.style.transition = 'none';

            const tamSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamSlide}px)`;

            setTimeout (() =>{
                slideshow.current.style.transition = '500ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;

            }, 30);
        }
    }

    useEffect(() => {
        intervaloSlideshow.current = setInterval(() =>{
            siguiente();
        }, 5000);

        //Eliminar intervalos
         slideshow.current.addEventListener('mouseenter',() =>{
            clearInterval(intervaloSlideshow.current);
         });

         //Volver a colocar el intervalo cuando quiten el cursor del slidehow
         slideshow.current.addEventListener('mouseleave',() =>{
            intervaloSlideshow.current = setInterval(() =>{
                siguiente();
            }, 5000);
         });
    }, []);

    return (
        <ContenedorPrincipal>
            <ContenedorSlideshow ref={slideshow}>
            <Slide>
                <a>
                <img src={img1} alt=""/>
                </a>
                <TextoSlide>
                    <p>Los más vendidos</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a>
                <img src={img2} alt=""/>
                </a>
                <TextoSlide>
                    <p>Productos nuevos</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a>
                <img src={img3} alt=""/>
                </a>
                <TextoSlide>
                    <p>Tendenciasl del mes</p>
                </TextoSlide>
            </Slide>
            </ContenedorSlideshow>
            <Controles>
                <Boton onClick={anterior}>
                    <FlechaIzquierda />
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <FlechaDerecha />
                </Boton>
            </Controles>
        </ContenedorPrincipal>
    );
}
const ContenedorPrincipal = styled.div`
position: relative;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	max-height: 400px; 
	position: relative;
	img {
		width: 100%;
        height: 400px;
		vertical-align: top;
	}
`;

const TextoSlide = styled.div`
	background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
	color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
	width: 100%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;
	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;


const Controles = styled.div`
position: absolute;
top: 0;
z-index: 20;
width: 100%;
height: 100%;
pointer-events: none;
`;

const Boton = styled.button`
pointer-events: all;
background: none;
border: none;
cursor: pointer;
outline: none;
width: 50px;
height: 100%;
text-align: center;
position: absolute;
transition: .3s ease all;

path{
    filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
}

${props => props.derecho ? 'right: 0' : 'left: 0'}
`;

export default Slidesshow;