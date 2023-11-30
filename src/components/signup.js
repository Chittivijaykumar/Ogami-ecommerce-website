import React from "react"
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/api";
import { useRef } from "react";
import axios from "axios";
import "../styles/signup.css";



const Signup = () => {
    const formRef = useRef(null)
    const handleRegister =(e)=>{
        e.preventDefault()
        const data={
            name:formRef.current.name.value,
            email: formRef.current.email.value,
            password: formRef.current.password.value,
            phone:formRef.current.phone.value,
            access:formRef.current.access.value,
        };
        const registerUrl= baseUrl+"/users/register"
        axios.post(registerUrl, data)
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        
    }
   return(
        <div>
            <Link to={"/signin "}>SIGN IN</Link>
            <Link to={"/"}>Home</Link>
            <h3>SIGN UP</h3>
            <div className="formbox">
            <form className="formsection" ref={formRef}>
                <h2>FORM REGISTRATION</h2>
                <div className="formdiv">
                    <label for="firstname">FIRST NAME:</label>
                    <input className="inputdata" type="text" name ="name"  required/>
                </div>
                <div className="formdiv">
                    <label for="email">EMAIL-ID:</label>
                    <input className="inputdata" type="email" name = "email" required />
                </div>
                <div className="formdiv">
                    <label for="mobilenumber">MOBILE NUMBER:</label>
                    <input className="inputdata" type="text" name = "phone"  maxlength="10"  />
                </div>
                <div className="formdiv">
                    <label for="password">PASSWORD:</label>
                    <input className="inputdata" type="password" maxlength="8" name="password" required/>
                </div>
                <div className="formdiv">
                    <label for="confirmpassword">ACCESS</label>
                    <input className="inputdata" name="access" required/>
                </div>
                
                <button onClick={handleRegister} >Register</button>


            </form>

        </div>
        
        </div>

    )
}
export default Signup;
