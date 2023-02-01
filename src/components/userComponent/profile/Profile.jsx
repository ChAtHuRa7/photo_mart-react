import React from 'react';
import './profile.css';
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const navigate = useNavigate ();

    const bookingform = () => {
      navigate("/bookingform");
    }  ;

  return (
    <div className='about'>
        {/* bottom set */}
     <div className="pack5">
      <div className="pack51">
        Studio: <br />
        Package: <br />
        Date: <br />
        Customer Name: <br />
        Email: <br />
        Location: <br />
        Mobile No: <br />
        Status: <br />
      </div>
    </div> 
    </div>
      
  )
}

export default Profile
