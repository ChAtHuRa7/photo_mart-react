import React,{useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { Card,About,Calendar,Package,Portfolio,Profile} from './../../../components/userComponent';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import { redirect } from 'react-router-dom';

const Menu = () => (
  <>
  <p><a href='/home'>Home</a></p>
  <p><a href='#wgpt3'>About</a></p>
  <p><a href='#possibity'>Profile</a></p>
  </>
)

const Navbar =() => {
const [profile,setProfile] = useState(JSON.parse(localStorage.getItem('profile')))
const [auth,setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
const [toggleMenu, setToggleMenu] = useState(false);
const navigate = useNavigate ();


const signup = () => {
  navigate("/signup");
};

const handelLogOut = (e) => {
  e.preventDefault();
  setAuth('')
  localStorage.removeItem('auth');
  localStorage.removeItem('profile');
  // setAuth('');
  navigate('home');
  // return redirect('/');
}

return (
<div className='gpt3__navbar'>
  <div className='gpt3__navbar-links'>
    <div className='gpt3__navbar-links_logo'>
      <div className='gpt3__navbar-links_container'>
        <Menu/>
      </div>
    </div>
        <div className='gpt3__navbar-sign'>
          {!auth &&  <p onClick={e=>navigate('/login')}>sign in</p>}
          {!auth && <button type='button' onClick={signup}>sign up</button>}
        </div>
        <div className='gpt3__navbar-dashbord-btn'>
          <div className='gpt3__navbar-dashbord'>
            {auth?.authorities[0] === 'PHOTOGRAPHER' && <button type='button' onClick={(e)=> navigate('./photographer/profile')}>Dashbord</button>}
          </div>
          <div className='gpt3__navbar-singOut'>
            {auth && <button type='button' onClick={handelLogOut}>Log out</button>}
          </div>
        </div>
        
        {/* <div className='gpt3__navbar-menu'>
          {toggleMenu
          ? <RiCloseLine color = '#fff' size={27}  onClick={() => setToggleMenu(false)}  />
          : <RiMenu3Line color = '#fff' size={27}  onClick={() => setToggleMenu(true)}  />
          }
          {toggleMenu && (
        <div className='gpt3__navbar-menu_container scale-up-center'>
          <div className='gpt3__navbar-menu_container-links'></div>
             <Menu/>
            <div className='gpt3__navbar-menu_container-links-sign'>
              { & <p>sign in</p>}
              {!profile && <button type='button' onClick={signup}>sign up</button>}
             
            </div>
          </div>
          )}
        </div> */}
    </div>
  </div>
)
          }

export default Navbar;
