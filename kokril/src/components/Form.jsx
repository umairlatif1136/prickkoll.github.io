import{ Link } from "react-router-dom"
import './Loggain.css'
let Form1=( props)=>{
    return(<div className="form">
        <form className="form1">
                 <input type="text" placeholder="email"/>
                 <br/>
                 <br/>
                 <input type="text" placeholder="password"/>
                 <br/>
                
                 <button className="buttonform">sign in</button>
                 
         
                </form>
                </div>
    )
}
export default Form1