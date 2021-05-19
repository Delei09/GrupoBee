import React from 'react'
import './Formulario.css'

function Formulario(){
    return (
        <form>
        <h2>Faça se cadastro grátis e concorra!</h2>
        <div className = 'input'>
            <input  type = 'text' placeholder = 'Nome Completo' />
            <input  type = 'text' placeholder = 'E-mail' />
        </div>
        <div className = 'input-dados'>
             <input type = 'text' placeholder = 'Telefone' />
             <input type = 'text/date' placeholder = 'Data de Nascimento' />
        </div>
        <div className = 'input-dados-radio' >
            <div className = 'content-radio'> 
                <input className = 'radio' name='sexo'  type="radio" />
                <label className = 'label' >Masculino</label> 
            </div>
            <div className = 'content-radio'>
                <input className ='radio' name='sexo' type="radio" />
                <label className = 'label' >Feminino</label> 
            </div>
        </div>
        <div className = 'input-dados-check-box' >
             <input className= 'check' type="checkbox" />
             <label > Ao marcar esta opção você aceita nossa Politica 
        de Privacidade e está de acordo com nossos Termos e Condições.</label>
        </div>

        <input type = 'button' className = 'botao'  value = 'Quero Conhecer'/>
        <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Et enim risus justo sit volutpat ut quis massa. Pharetra eget 
            dui, aenean at sed semper aliquet ultrices sit. Nisl sed aliquam
            aliquam augue scelerisque. At ornare vel vel quisque aliquam
            pellentesque eu.
        </h4>
    </form>
    )
}

 export default Formulario;
