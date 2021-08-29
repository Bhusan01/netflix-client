import React from 'react';
import './login.scss';
import {useState, useContext} from 'react';
import {login} from '../../authContext/apicalls';
import {AuthContext} from '../../authContext/AuthContext';
import {useHistory} from 'react-router-dom'
 


const Login = () => {
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {dispatch} = useContext(AuthContext);
    const handleLogin = (e) =>{
        e.preventDefault()
        login({email, password},dispatch)
        history.push("/")
    }
    return (
        <div className="login">
            <div className="top">
               <div className="wrapper">
                <img className="logo"
                    src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30"
                    alt="image" />
               </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1> 
                    <input type="email" placeholder="email or phone number" onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}/>
                    <button className="loginButoon " onClick={handleLogin}>
                        Sign In
                    </button>
                    <span>
                        New to Netflix? <b>Sign Up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>learn more</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login
