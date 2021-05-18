import React from 'react'
import './Content.css'
import ImagemPremio from '../img/BigPremioNativa 1.png'

 const props = () => (
     <main className  = 'main' >
         <div className="conteudo-parte1">
                <div className="imagemPremio content">
                    <a href = '#' > <img className = 'img-premio' src = {ImagemPremio} alt = 'Big Premio' /> </a>
                </div>
                <div className="formulario content">
                    <form>
                        <h2>Faça se cadastro grátis e concorra!</h2>
                        <input  type = 'text' placeholder = 'Nome Completo' />
                        <input  type = 'text' placeholder = 'E-mail' />
                        <div className = 'input-dados'>
                             <input type = 'text' placeholder = 'Telefone' />
                             <input type = 'text' placeholder = 'Data de Nascimento' />
                        </div>
                        <div className = 'input-dados-radio' >
                            <div className = 'radio'> 
                                <input type="radio" />
                                <label for="male">Masculino</label> 
                            </div>
                            <div className = 'radio'>
                                <input type="radio" />
                                <label >Feminino</label> 
                            </div>
                        </div>
                        <div className = 'input-dados-check-box' >
                             <input className= 'check' type="checkbox" />
                             <label > Ao marcar esta opção você aceita nossa Politica 
                        de Privacidade e está de acordo com nossos Termos e Condições.</label>
                        </div>
                        
                            < button  >Conhecer</ button>
                        
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
                conteudo 2
         </div>
     </main>
 )

 export default props