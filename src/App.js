
import './App.css';
// import Signup from "./screens/Signup"
import Home from "./screens/Home"
import Home2 from "./screens/Home2"
import Login from "./screens/Login"
import Signup from "./screens/Signup"



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  
  return (
    <BrowserRouter>
     <div>
   
      <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/logedin" element={<Home2/>}/>
         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/createuser" element={<Signup/>}/>

         
         
         
      </Routes>

       
       </div>
   
    </BrowserRouter>
  );
}

export default App;
