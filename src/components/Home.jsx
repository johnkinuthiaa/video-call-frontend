import "/src/index.css"
import Header from "./Header.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Home =(()=>{
    const navigate =useNavigate();
    useEffect(()=>{
        const connectedUser =localStorage.getItem("connectedUser")
        const hasJwt=localStorage.getItem("jwtToken")
        if(connectedUser===null &&hasJwt ==null){
            navigate("/")
            return;
        }

    },[])

    return (
        <>
        <Header/>
        <div className="container">

            <div className="main">
                <div className="new-meeting">
                    <button id="newMeetingBtn">Create a New Meeting</button>
                    <div className="join-meeting">
                        <input type="text" placeholder="Meeting ID" id="meetingName"/>
                        <button id="joinMeetingBtn">Join</button>
                    </div>
                </div>
                <div className="connected-users">
                    <button id="logoutBtn" onClick={()=>{
                        localStorage.clear();
                        setTimeout(()=>{
                            navigate("/")
                        })

                    }}>Logout</button>
                    <h2>Connected Users</h2>
                    <ul id="userList">
                        {}
                    </ul>
                </div>
            </div>
            <div className="image-container">
                <img
                    src="https://images.idgesg.net/images/article/2020/04/zoom_video_conferencing_online_meeting_remote_workers_one_user_connected_via_laptop_with_a_grid_of_twelve_participants_on_screen_2400x1600-100837446-large.jpg?auto=webp&quality=85,70"
                    alt="Image"/>
            </div>
        </div>
        </>
    )

})
export default Home