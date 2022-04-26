import React from "react"; 
import Item from "./Item"
const Navitem=(props)=>{
    const Navitems=[{
        title:"prickkoll",
        work: "SÅ FUNKAR DET",
        learn:" LÄR DIG MER",
        contact:" KONTAKTA OSS",
        login:"LOGGA IN",
        signin:"SIGN_UP"}
    ]
    return(

        <div>
<Item items={Navitems} > </Item>

        </div>

    )

}
export default Navitem