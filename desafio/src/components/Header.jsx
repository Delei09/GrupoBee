import React from 'react'
import './Header.css'
import LogoBee from '../img/logo-bee-2_semfundo 1.png'
import LogoBigtester from '../img/421.png'

 const props = () => (
     <header className  = 'header' >
         <div className="logo">
             <a href = '#' > <img className = 'logoBee' alt = 'logo Grupo Bee' src = {LogoBee}  /></a>
         </div>
         <div className="logo">
             <a href = '#' > <img className = 'logoBigTester' alt = 'logo bigTester' src = {LogoBigtester}  /></a>
         </div>

     </header>
 )

 export default props


    