import {GET_CONTACT_FAILED,GET_CONTACT_SUCCESS} from '../Actions/actionTypes'
const initialState={contacts:[],errors :null};
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_CONTACT_SUCCESS :
            return {...state,contacts:payload}
            case GET_CONTACT_FAILED:
            return {...state,errors:payload}
        default :
        return state
    }
}