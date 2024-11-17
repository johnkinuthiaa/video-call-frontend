import {Link} from "react-router-dom";

const SocialIcons =(()=>{
    return (
        <div className="social-icons">
            <h2>Join Us</h2>
            <Link to="https://www.instagram.com/_sli.ppery_?igsh=OTcycGYyc3llM3Fz" target="_blank"><i className="fa fa-instagram"></i></Link>
            <Link to="#" target="_blank"><i className="fa fa-linkedin"></i></Link>
            <Link to="https://github.com/johnkinuthiaa" target="_blank"><i className="fa fa-github"></i></Link>
            <Link to={""}> <i className="fa-brands fa-discord"></i> </Link>
        </div>
    )
})
export default SocialIcons;