import React from 'react';
import './signup.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createNewUser } from '../../actions/auth';


const Signup = () => {

  const [isPhotographer,setIsPhotographer] = useState(false);
  const [newUserData,setNewUserData] = useState({userEmail:'', userName:'', password:'', mobileNumber:'', studioName:'', address:'', authorities:[]});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClick = (status) =>{
      setIsPhotographer(status);
  }

  const handelSubmit=(e)=>{
      e.preventDefault()
      if(isPhotographer){
        dispatch(createNewUser({...newUserData, authorities:['PHOTOGRAPHER']},navigate));
      }
      else{
        dispatch(createNewUser({...newUserData, authorities:['USER']},navigate));
      }
  }

  return (
      <div>
        <div className ="signup-container">
            <div className="signup-form-container">
                <div className="signup-form-1">
                    <div className="signup-form-titel">
                        <span onClick={e=>handelClick(false)} className={isPhotographer?'titel-1':'titel-1 titel-onClick'}>
                            <h3>User</h3>
                        </span>
                        <span onClick={e=>handelClick(true)} className={isPhotographer?'titel-2 titel-onClick':'titel-2'}>
                            <h3>Photographer</h3>
                        </span>
                    </div>
                    <form onSubmit={handelSubmit}>
                        <div className='signup-row'>
                          <div className='signup-column-1'>
                            <div className="input-container">
                                <input onChange={e=>setNewUserData({...newUserData, userName:e.target.value})} value={newUserData.userName}  type="text" className="form-control" placeholder="Full Name *" />
                            </div>
                            <div className="input-container">
                                <input onChange={e=>setNewUserData({...newUserData, userEmail:e.target.value})} value={newUserData.userEmail} type="email" className="form-control" placeholder="Email *" />
                            </div>
                            <div className="input-container">
                                <input onChange={e=>setNewUserData({...newUserData, password:e.target.value})} value={newUserData.password} type="password" className="form-control" placeholder="Password *" />
                            </div>
                            <div className="input-container">
                                <input  type="password" className="form-control" placeholder="Confirm Your Password *" />
                            </div>
                          </div>

                          <div className='signup-column-2'>
                            <div className="input-container">
                                <input onChange={e=>setNewUserData({...newUserData, mobileNumber:e.target.value})} value={newUserData.mobileNumber} type="number" className="form-control" placeholder="Mobile  *" />
                            </div>
                            <div className="input-container">
                                <input onChange={e=>setNewUserData({...newUserData, address:e.target.value})}  value={newUserData.address} type="text" className="form-control" placeholder="Address *" />
                            </div>
                            <div className="input-container">
                                {isPhotographer && <input onChange={e=>setNewUserData({...newUserData, studioName:e.target.value})} value={newUserData.studioName} type="text" className="form-control" placeholder="Studio Name *" />}
                            </div>
                            <div className="input-container-btn">
                              <button type="submit" className="btnSubmit">Submit</button>
                            </div>
                          </div>
                        </div>
                
                    </form>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Signup
