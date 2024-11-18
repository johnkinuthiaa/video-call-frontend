
import './App.css'
import Login from "./components/Login.jsx";
import {Route, Routes} from "react-router-dom";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import VideoCall from "./components/VideoCall.jsx";


function App() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path={"/call"} element={<VideoCall/>}></Route>
        </Routes>

        )

}

export default App
