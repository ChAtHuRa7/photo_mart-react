import { CREATE } from "../constants/actionTyps";

const authReducer =  ( state = {data:[]}, action) => {
    switch(action.type){
        case CREATE:
            localStorage.setItem('auth', JSON.stringify({...action?.payload.token, email : action?.payload.data}))
            return {...state, data: action.payload.token};
        default:
            return state;
    }

};

export default authReducer;