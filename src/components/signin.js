import React, { useState } from "react";
import { baseUrl } from "../utils/api";
import { useRef } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";


const Signin = () => {
    const formRef = useRef(null);
    const [error , setError] = useState(null);
    const navigate =   useNavigate();
    const handleLogin =(e)=>{
        e.preventDefault()
        const data={
            email: formRef.current.email.value,
            password: formRef.current.password.value,
        };
        const loginUrl= baseUrl+"/users/login"
        // AXIOS POST REQUEST

        axios.post(loginUrl, data)
        .then(result => {
            const {data} = result;
            console.log(data)
            if(data.token){
                const keys = Object.keys(data);
                keys.forEach(e => localStorage.setItem(e, data[e]))
                setError(null)
                navigate("/")
            }
            else{
                setError(data);
            }
        })
        .catch(err=>console.log(err))
    }

    return(
        <div>
             <Link to={"/signup "}>SIGN UP</Link>
             <Link to={"/"}>Home</Link>
            <h3>SIGN IN</h3>
            {error && <p>{error.err}</p>}
            <div className="formbox">
            <form className="formsection" ref={formRef}>
                <h2>LOGIN DETAILS IN </h2>
                <div className="formdiv">
                    <label for="email">EMAIL-ID:</label>
                    <input className="inputdata" type="email" name = "email" required />
                </div>
                <div className="formdiv">
                    <label for="password">PASSWORD:</label>
                    <input className="inputdata" type="password" maxlength="8" name="password" required/>
                </div>
                
                <button onClick={handleLogin} >LOGIN</button>


            </form>

        </div>
        
       
           

        </div>

    )
}
export default Signin ;
