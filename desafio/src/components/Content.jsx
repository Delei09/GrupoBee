import React from 'react'
import './Content.css'
import ImagemPremio from '../img/BigPremioNativa 1.png'
import ImagemBeeleads from '../img/womanradio21.png'

 const props = () => (
     <main className  = 'main' >
         <div className="conteudo-parte1">
                <div className="imagemPremio content">
                    <a href = '#' > <img className = 'img-premio' src = {ImagemPremio} alt = 'Big Premio' /> </a>
                </div>
                <div className="formulario content">
                    <form>
                        <h2>Faça se cadastro grátis e concorra!</h2>
                        <div className = 'input'>
                            <input  type = 'text' placeholder = 'Nome Completo' />
                            <input  type = 'text' placeholder = 'E-mail' />
                        </div>
                        <div className = 'input-dados'>
                             <input type = 'text' placeholder = 'Telefone' />
                             <input type = 'text' placeholder = 'Data de Nascimento' />
                        </div>
                        <div className = 'input-dados-radio' >
                            <div className = 'content-radio'> 
                                <input className = 'radio' type="radio" />
                                <label for="male">Masculino</label> 
                            </div>
                            <div className = 'content-radio'>
                                <input className ='radio'  type="radio" />
                                <label >Feminino</label> 
                            </div>
                        </div>
                        <div className = 'input-dados-check-box' >
                             <input className= 'check' type="checkbox" />
                             <label > Ao marcar esta opção você aceita nossa Politica 
                        de Privacidade e está de acordo com nossos Termos e Condições.</label>
                        </div>

                        < button  >Quero Conhecer</ button>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Et enim risus justo sit volutpat ut quis massa. Pharetra eget 
                            dui, aenean at sed semper aliquet ultrices sit. Nisl sed aliquam
                            aliquam augue scelerisque. At ornare vel vel quisque aliquam
                            pellentesque eu.
                        </h4>
                    </form>
                </div>
         </div>
         <div className="conteudo-parte2">
                <div className = 'container'>
                    <img className =  'image-Beeleads' alt = 'imagem premio' src ={ImagemBeeleads} />
                    <div>
                    <video  controls>
                        <source src="https://www.youtube.com/watch?v=aJT9F2oHrSg " type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                    </div>
                </div>
         </div>
     </main>
 )

 export default props