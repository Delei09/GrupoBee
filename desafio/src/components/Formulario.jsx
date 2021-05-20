import React, { Component } from 'react'
import './Formulario.css'
import axios from 'axios'

const initial = { nome : ' ' , email : ' ' , telefone : ' ' , nascimento : ' ',
                sexo : '' , inputCheck : ''
}

class Formulario extends Component {

    state = {...initial}
    input(){
        
        return(
            <div className = 'input'>
                <input  type = 'text' placeholder = 'Nome Completo' onChange = {e => this.setState({nome : e.target.value})} />
                <input  type = 'text' placeholder = 'E-mail' onChange = {e => this.setState({email : e.target.value})} />
            </div>
        )
    }
    inputDados(){
        return(
            <div className = 'input-dados'>
                <input type = 'text' placeholder = 'Telefone' onChange = {e => this.setState({telefone : e.target.value})} />
                 <input type = 'text/date' placeholder = 'Data de Nascimento' onChange = {e => this.setState({nascimento : e.target.value})} />
             </div>
        )
    }
    inputDadosRadio(){
        
        return(
            <div className = 'input-dados-radio' >
                <div className = 'content-radio'> 
                    <input className = 'radio' name='sexo' value = 'masculino' type="radio" onChange = {e => this.setState({sexo : e.target.value})}/>
                    <label className = 'label' >Masculino</label> 
                </div>
                <div className = 'content-radio'>
                    <input className ='radio' name='sexo' value = 'feminino' type="radio" onChange = {e => this.setState({sexo : e.target.value})} />
                    <label className = 'label' >Feminino</label> 
                </div>
            </div>
        )
    }
    inputDadosCheck(){
        
        return(
            <div className = 'input-dados-check-box' >
                <input className= 'check' type="checkbox" value = 'ok' onChange = {e => this.setState({inputCheck : e.target.value})} />
                <label > Ao marcar esta opção você aceita nossa Politica 
                de Privacidade e está de acordo com nossos Termos e Condições.</label>
            </div>
        )
    }
    botao(){
        return(
            <input type = 'reset' className = 'botao'  value = 'Quero Conhecer' 
                onClick = {e => {
                    this.salvarDadosFormulario()
                    this.limpar()
                    return alert(' Cadastro Salvo! Obrigado!')
                }}
            
            />
        )
    }
    salvarDadosFormulario(){

        let {nome, email , telefone , nascimento ,
        sexo } = this.state
        let cadastro = {  nome , email , telefone ,nascimento , sexo }
        console.log(cadastro)
        const url = 'http://localhost:3003/cadastro'
        axios.post(url , cadastro)
        
    }
    limpar(){
        this.setState({...initial})
    }
    textoFormH4(){
        return(
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Et enim risus justo sit volutpat ut quis massa. Pharetra eget 
                dui, aenean at sed semper aliquet ultrices sit. Nisl sed aliquam
                aliquam augue scelerisque. At ornare vel vel quisque aliquam
                pellentesque eu.
            </h4>
        )
    }

    render(){
        return (
            <form>
                <h2>Faça seu cadastro grátis e concorra!</h2>
                {this.input()}
                {this.inputDados()}
                {this.inputDadosRadio()}
                {this.inputDadosCheck()}
                {this.botao()}
                {this.textoFormH4()}
            </form>
        )
    }
   
}

 export default Formulario;
