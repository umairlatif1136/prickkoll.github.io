import logo from './logo.svg';
import './App.css';
import Navitem from './components/Navbar/Navbar';

import Call from './components/Call';
import Form from './components/Loggain';
import Sign from './components/signin';
import{
  BrowserRouter,
  Routes,
  Route,
 

} from 'react-router-dom'

function App() {
  
  
  
  return (<div className='aoo'>
    <Navitem></Navitem>
   < Routes>
  
       <Route path='' element={<Call/>}/>
       <Route path='loggain' element={<  Form />}/>
       <Route path='signup' element={<  Sign />}/>




          </Routes>
    
    
   
   
    
    </div>
  );
}

export default App;
