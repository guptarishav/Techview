import React from 'react';
import './smedia.css';
import { NavLink } from 'react-router-dom';

const Socialmedia=()=>{
    return(
        <>
        <div className="Sdiv text-center">
        <a href="https://www.facebook.com/profile.php?id=100004505177288"  target="_blank"className="fa fa-facebook"></a>
        <a  href="https://twitter.com/gupta_rishav__?s=03"  target="_blank"className="fa fa-twitter"></a>
        <a  href="https://www.instagram.com/gupta_rishav__/?hl=en" target="_blank"className="fa fa-instagram" ></a>
        <a href="https://web.whatsapp.com/"   target="_blank"className="fa fa-whatsapp"></a>
        </div>

        
        </>
    )
}
export default Socialmedia;