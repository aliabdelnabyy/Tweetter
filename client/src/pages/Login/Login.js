import React, {  useState } from 'react';
import './Login.css';
import Axios from 'axios';
import {useHistory} from 'react-router-dom'

function Login() { 

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const [errorMessage,setErrMessage] = useState('');

    let history = useHistory();

    const login = () =>{
        Axios.post("http://localhost:3001/user/login",{username:username, password:password}).then((response)=>{
            if(response.data.loggedIn){
                localStorage.setItem("loggedIn",true);
                localStorage.setItem("username",response.data.username);
                history.push("/");
            }
            else{
                setErrMessage(response.data.message);
            }
            
        })
    };  

    return (
        
        <div className="login">
            <h1>Login</h1>
            <div className="loginForm">
                <input type="text" placeholder="username..." onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="password" placeholder="password..." onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={login}>Login</button>
                <h2 style={{color: "red"}}>{errorMessage}</h2>
            </div>
        </div>
    )
}

export default Login
