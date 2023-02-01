import React from 'react';
import { Navbar,Footer} from '../../components/userComponent';
import { Outlet } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getuserByEmail } from '../../actions/users';
import { useNavigate } from 'react-router-dom';
import { getPhotographerByEmail } from '../../actions/photographers';

import './mainpage.css';

const MainPage = () => {
  const [auth,setAuth] = useState(JSON.parse(localStorage.getItem('auth')));
  const [profile,setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(auth && !profile){
      if(auth?.authorities[0] === 'USER'){
          dispatch(getuserByEmail(auth.email,navigate))
      }
      else if(auth?.authorities[0] === 'PHOTOGRAPHER'){
          dispatch(getPhotographerByEmail(auth.email,navigate))
      }
    }
  },[]);

  return (
    <div className='mainpage_container'>  
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div> 
  )
};

export default MainPage;