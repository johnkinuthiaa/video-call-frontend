import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import SocialIcons from "./SocialIcons.jsx";

const Login =(()=>{
    const[username,setUsername] =useState("")
    const[password,setPassword] =useState("")
    const [email,setEmail]=useState("")
    const[modal,setModal] =useState(false)
    const navigate =useNavigate()

    const submitForm =(async ()=> {
        const user = {
            email: email,
            password: password,
            username:username
        };
        const response =await fetch(`http://localhost:8080/api/v1/video-app/login`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data =await response.json()
        if(data.statusCode ===200){
            setModal(true)

            localStorage.setItem("jwtToken",JSON.stringify(data.jwtToken))
            localStorage.setItem("connectedUser",JSON.stringify(data.user))
            navigate("/home")

        }else{
            console.log(data)
            navigate("/login")
        }

    })

    return (
        <div className="container">
            <SocialIcons/>
            <div className="login-form">
                <h2>Login</h2>
                <form id="loginForm" onSubmit={(e) => {
                    e.preventDefault();
                    setTimeout(()=>{
                        submitForm();
                    },2000)

                }}>
                    <label htmlFor="username">UserName:</label>
                    <input type="username" id="username" required onChange={(e) => {
                        setUsername(e.target.value)
                    }}/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>

                    <button type="submit">Login</button>
                </form>
                <p>Don`&apos`t have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
})
export default Login;