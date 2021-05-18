import React from 'react'
import './Footer.css'
import LogoRodapé from '../img/logo-bee-2_semfundo 2.png'
import 'font-awesome/css/font-awesome.min.css'


 const props = () => (
     <footer className  = 'footer' >
         <div className="logo-footer">
             <a href = '#' > <img alt = 'logo rodape' src = {LogoRodapé} /> </a>
         </div>
         <div className="icones">
            <i className ="fab fa-facebook-square">1</i>
            <i className ="fab fa-home">2</i>
            <i className ="fab fa-twitter-square">3</i>
            <i className ="fab fa-instagram-square">4</i>
         </div>
     </footer>
 )

 export default props