import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import SocialIcons from "./SocialIcons.jsx";


const Register =(()=>{
    const[username,setUsername] =useState("")
    const[password,setPassword] =useState("")
    const [email,setEmail]=useState("")

    const navigate = useNavigate();

    const submitForm =(async ()=> {
        const user = {
            username:username,
            email: email,
            password: password,

        };
        const response =await fetch(`http://localhost:8080/api/v1/video-app/register`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if(response.ok){
            const data = await response.json();
            console.log(data);
            navigate('/login');
        }else{
            console.error('Registration failed:', response.message);
        }

    })

    return (
        <div className="container">
            <SocialIcons/>
            <div className="login-form">
                <h2>Register</h2>
                <form id="registrationForm" onSubmit={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                        submitForm();

                    }, 2000)

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

                    <button type="submit" >
                        Register
                    </button>
                </form>

                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
})
export default Register