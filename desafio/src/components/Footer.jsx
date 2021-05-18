import React from 'react'
import './Footer.css'
import LogoRodapé from '../img/logo-bee-2_semfundo 2.png'
import Icones from './Icones'


 const props = () => (
     <footer className  = 'footer' >
         <div className="logo-footer">
             <a href = '#' > <img alt = 'logo rodape' src = {LogoRodapé} /> </a>
         </div>
         <div className="icones">
            <Icones />
         </div>
     </footer>
 )

 export default props