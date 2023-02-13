import React from "react";
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { authenticatUser } from "../../actions/auth";

import './login.css'

export default function Login(){
    const [isPhotographer,setIsPhotographer] = useState(false);
    const [loginData,setLoginData] = useState({userEmail:'', password:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelOnClick = () =>{
        setIsPhotographer(!isPhotographer);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(authenticatUser(loginData,navigate));
    }

    return(
      <div className ="login-container">
            <div className="login-form-container">
                <div className="login-form-1">
                    <div className="login-form-titel">
                        <div onClick={handelOnClick} className={isPhotographer?'titel-1':'titel-1 titel-onClick'}>
                            <h3>User</h3>
                        </div>
                        <div onClick={handelOnClick} className={isPhotographer?'titel-2 titel-onClick':'titel-2'}>
                            <h3>Photographer</h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="input-container">
                            <input onChange={(e)=>setLoginData({...loginData, userEmail:e.target.value})} type="email" className="form-control" placeholder="Your Email *" value={loginData.userEmail} />
                        </div>
                        <div className="input-container">
                            <input onChange={(e)=>setLoginData({...loginData, password:e.target.value})} type="password" className="form-control" placeholder="Your Password *" value={loginData.password}/>
                        </div>
                        <div className="input-container-btn">
                            <button type="submit" className="btnSubmit">Login</button>
                        </div>
                        <div className="input-container">
                            <a href="#" className="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  
  );  
  }