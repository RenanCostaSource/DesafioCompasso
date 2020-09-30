import api from '../../services/api';
import {getuser} from '../ducks/gituser'
import {seterror, cleanerror} from '../ducks/fetcherror'



export const searchUser = (user)=>{
    
    return (dispatch) =>{
        api.get(`/users/${user}`).then((res)=>{
            dispatch(getuser(res.data));
        }).catch((error)=>{
            if(error.response.status===404){
                dispatch(seterror("404 Não foi possível encontrar o usuário"));
            }else{
                dispatch(seterror(error.response.status));
            }
        })
    }
}

export const cleanError = ()=>{
    return (dispatch) =>{
        dispatch(cleanerror());
    }
}