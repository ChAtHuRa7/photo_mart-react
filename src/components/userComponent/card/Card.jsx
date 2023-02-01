import React from 'react';
import PhotoCard from "./photoCard/PhotoCard";
import './card.css';
import  {Grid} from "@mui/material";
import { useLocation ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPhotographersLimited , getPhotographers } from '../../../actions/photographers';


const Card = ({count}) => {

  const {photographers} = useSelector((state)=> state.photographers);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handelFindmore = () => {
    navigate("/findmore");
  }  ;

  useEffect(()=>{
    if(location.pathname.includes('home')){
      dispatch(getPhotographersLimited(3));
    }
    else{
      dispatch(getPhotographers());
    }
  },[location,dispatch]);

  return(
    <div className="now_showing-container">
        <div className="now_showing-container_header">
        </div>
        <Grid container direction="row" justifyContent='center'>
            
            {photographers?.map(photographer => <Grid key={photographer.photographerId} item xs={4}><PhotoCard photographer={photographer}/></Grid>)}

        </Grid> 

        {!location.pathname.includes('findmore') && photographers &&
          <div className='btn_findMore'>
            <button type="button" onClick={handelFindmore} >Find More</button>
          </div> 
        }
    </div>
    


    )
}

export default Card