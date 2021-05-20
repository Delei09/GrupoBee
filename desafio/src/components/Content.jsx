import React from 'react'
import './Content.css'
import ImagemPremio from '../img/BigPremioNativa 1.png'
import WomamBrush from '../img/womanBrush.png'
import Formulario from './Formulario'
import Video from './Video'

 const props = () => (
     <main className  = 'main' >
         <div className="conteudo-parte1">
                <div className="imagemPremio content">
                    <a href = '#' > <img className = 'img-premio' src = {ImagemPremio} alt = 'Big Premio' /> </a>
                </div>
                <div className="formulario content">
                    <Formulario />
                </div>
         </div>
         <div className="conteudo-parte2">
                <div className = 'container'>
                    <div className = ' image-Beeleads'>
                         <img alt = 'imagem premio' src ={WomamBrush} />
                    </div>
                    <div className = ' video'>
                         < Video />
                    </div>
                </div>
         </div>
     </main>
 )

 export default props