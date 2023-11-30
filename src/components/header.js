import "../styles/header.css";
import {AiFillMail} from "react-icons/ai"
import {IoMdCall} from "react-icons/io"
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {BiLogoInstagramAlt} from "react-icons/bi"
import {BiLogoPinterestAlt} from "react-icons/bi"
import {BsFillPersonFill} from "react-icons/bs"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <div className="header_container">
            <div className="header_1">
                <div className="header1_icons" ><AiFillMail className="ionicon_style"/><p>info.deercreative@gmail.com</p></div>
                <div className="header1_icons" ><IoMdCall className="ionicon_style"/><p>+65 11.188.888</p></div>             
            </div>
            <div className="header_2">
                <div className="header2_icons">
                    <BiLogoFacebook className="ionicon_style"/>
                    <BiLogoTwitter className="ionicon_style"/>
                    <BiLogoInstagramAlt className="ionicon_style"/>
                    <BiLogoPinterestAlt className="ionicon_style"/>
                </div>
                <div className="header2_languagedropdown">
                     <select name="" id="">
                         <option value="">ENGLISH</option>
                         <option value="">SPANISH</option>
                         <option value="">JAPANESE</option>
                         <option value="">VITENA</option>
                    </select>
                </div>
                <div className="header3_loginbutton">
                        <BsFillPersonFill className="ionicon_style"/> 
                        <Link to={"/signup"}> <button>Login</button></Link>
                        {/* <Link to={"/signup"}> <button>SIGNUP</button></Link> */}
                        
                </div>
            </div>
            
        </div>
    )
}

export default Header;

