import React from 'react'
import './NavBar.css'
import { useSelector , useDispatch} from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { getPhotographerById } from '../../../actions/photographers' 

export const NavBar = () => {
  const [profile,setProfile] = useState(JSON.parse(localStorage.getItem('profile')))
  const {photographer} = useSelector((state)=> state.photographers);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPhotographerById(profile.photographerId));
  },[dispatch]);


  return (
    <div className='navbar'>
      
        <img src={photographer?.profilePicLink} alt="user profile"  width="70px" hight="70px"/>

        <div className='navbarlist'>
          <p>{photographer?.photographerName}</p>
          <p>|</p>
          <p>{photographer?.contactEmail}</p>
          <p>|</p>
          <p>{photographer?.address}</p>
          <p>|</p>
          <p>{photographer?.photographerMobileNo}</p>
        </div>
    </div>
  )
}

export default NavBar;