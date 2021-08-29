import { createChainedFunction } from '@material-ui/core';
import axios from 'axios';
import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from './AuthAction';


export const login = async (user,dispatch) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post("https://husannetflix.herokuapp.com/api/auth/login", user);
        dispatch(loginSuccess(res.data))   
    }catch(err){
        dispatch(loginFailure());
    }
};

export const logout = (dispatch) => {
    dispatch(logoutStart())
    try{
        dispatch(logoutSuccess())
    }catch(err){
        dispatch(logoutFailure())
    }
}