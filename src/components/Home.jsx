import "/src/index.css"
import Header from "./Header.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


const Home =(()=>{
    const navigate =useNavigate();
    const[activeUsers,setActiveUsers] =useState([])
    useEffect(()=>{
        const connectedUser =localStorage.getItem("connectedUser")
        const hasJwt=localStorage.getItem("jwtToken")
        users();

        if(connectedUser===null &&hasJwt ==null){
            navigate("/")
            return;
        }

    },[])
    const users =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/video-app/active-users")
        const data =await response.json()
        setActiveUsers(data.usernames);
    })
    console.log(activeUsers)


    return (
        <>
        <Header/>
        <div className="container">

            <div className="main">
                <div className="new-meeting">
                    <button id="newMeetingBtn" onClick={()=>{
                        navigate("/call")
                    }}>Create a New Meeting</button>

                </div>
                <div className="connected-users">
                    <button id="logoutBtn" onClick={()=>{
                        localStorage.clear();
                        setTimeout(()=>{
                            navigate("/")
                        })

                    }}>Logout</button>
                    <h2>Connected Users</h2>
                    {activeUsers?.length>0? (
                        <div className={"userList"}>
                            {activeUsers.map((user)=> (
                                // eslint-disable-next-line react/jsx-key
                                <ul id="userList">
                                    <img className={"user-image"} alt={"user image"} src={"https://i.pinimg.com/736x/fb/8f/3e/fb8f3e83f9146e6b6a805a535f665dd7.jpg"}></img>
                                    <p>{user.toLocaleUpperCase()}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                         style={{width: '20px', height: '20px', marginLeft: '2px'}}>
                                        <path fill="#63E6BE"
                                              d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
                                    </svg>

                                </ul>

                            ))}

                        </div>
                        ) :
                        (
                            <div className={"userList"}>
                                <h2>0 connected users</h2>

                            </div>
                        )
                    }


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