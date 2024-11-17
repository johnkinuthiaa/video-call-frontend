import {useState} from "react";
import "/src/index.css"

const Header =(()=>{
    const{username,setUsername} =useState("")
    const name =JSON.parse(localStorage.getItem("connectedUser"))

    return(
        <div className={"header"}>
            <div className={"user-name"}>
                <h1>ViidMO</h1>
            </div>

        </div>
    )
})
export default Header;