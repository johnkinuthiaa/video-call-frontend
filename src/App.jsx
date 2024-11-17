
import './App.css'
import Login from "./components/Login.jsx";
import {Route, Routes} from "react-router-dom";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";


function App() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>

        )

}


export default App
