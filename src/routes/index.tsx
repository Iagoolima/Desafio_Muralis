import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../pages/app';
import Welcome from '../pages/welcome';
import Sucess from '../pages/sucess';

export default function AppRoute() {
    return (
  
        <Router>
  
          <Routes>
  
            <Route path="/" element={<Welcome/>} />
         
             <Route path="/form" element={<App/>}/> 

             <Route path="/sucess" element={<Sucess/>}/> 
  
          </Routes>
  
        </Router>
     
    )
  }