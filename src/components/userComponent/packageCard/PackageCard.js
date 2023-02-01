import React from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getPackagesByPhotId } from '../../../actions/packages';

import './packageCard.css';

const PackageCard = ({id,handelPackageData}) => {
    const [packageData , setPackageData] = useState({packageTittle:'',packageDescription:'',price:'',packageStatus:''});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const {packages} = useSelector((state)=>state.packages);

    useEffect(()=>{
        dispatch(getPackagesByPhotId(id));
    },[location]);

    const handelChange = (pack)=>{
        handelPackageData(pack)
        // setPackageData(pack)
    }

  return (    
    <div > 
        <div className="packages_card_container">
          <Grid container direction={'row'} justifyContent={'space-evenly'}>
            {packages?.map(pack=> 
              <Grid key={pack.id} item xm={4}>
                <div className="package_card">
                    <p>{pack.packageTittle}</p>
                  <input type="radio" onChange={handelChange(pack)} value={pack.packageId} name="type" className="package_radio" />
                </div>
              </Grid>
            )}
          </Grid>
        </div>
    </div>
  )
}

export default PackageCard;
