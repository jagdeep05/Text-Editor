import  React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import Info from './components/Info';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";


function App() {
const[mode , setMode ]= useState('light');
const[alert , setAlert ]= useState(null);

const showAlert=(message,type)=>{
setAlert({
msg:message ,
type:type
})
setTimeout(() => {
  setAlert(null);
}, 2000);

}

const toggleMode= ()=>{
if (mode==='light') {
  setMode('dark')
  document.body.style.backgroundColor='grey';
  showAlert("dark mode has been enabled","success")

} else {
  setMode('light')
  document.body.style.backgroundColor='white';
  showAlert("dark mode has been disabled","success")

}

}


return (
<>
< BrowserRouter basename="/Text-Editor" >

  < Navbar Textutils="Text-Editor" mode={mode} toggleMode={toggleMode} />
   
  <Alert  mode={mode} alert={alert}/> 
  
   <div>

    <div className="container my-3">
    <Routes>
        
        <Route exact path="/" element={<Textform heading="Enter your text" mode={mode} showAlert={showAlert} /> }>
          
          </Route>

          <Route exact path="/about" element={<Info  mode={mode}  />}>
            
          </Route>

      
    </Routes>
   
    
  
          

    </div>
   
   </div>
 

</BrowserRouter>
</>

  );
}

export default App;
