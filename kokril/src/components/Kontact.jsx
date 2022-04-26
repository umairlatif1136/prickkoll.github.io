import React from "react";
import './kontact.css'
 
import{FontAwesomeIcon} from"@fortawesome/react-fontawesome"
 import { faInstagram,
    faTwitter

} from "@fortawesome/free-brands-svg-icons"

 let Kontact=()=>{
     return(
         <div className="kontact">
             <h1>Kontakta oss</h1>
             <div className="kontact1">
             <div>
                 <FontAwesomeIcon  icon = {faInstagram } size="2x"/> <p> Instagram</p>
             </div>
             <div>
                 <FontAwesomeIcon  icon = {faTwitter } size="2x"/> <p> twitter</p>
             </div>
   
             <form>
                
                 <input type="text" placeholder="for och afternoon"/>
                 <br/>
                 <input type="text" placeholder="for och afternoon"/>
                 <br/>
                 <input type="text" placeholder="for och afternoon"/>
                 <br/>
                 <button className="button">send</button>
             </form>
         </div>
         </div>
     )
 }
 export default Kontact