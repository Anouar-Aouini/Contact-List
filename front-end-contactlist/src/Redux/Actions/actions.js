import axios from 'axios'
export const getContact=()=> async (dispatch) => {
    try {
        const result= await axios.get('/api/contact/all')
        dispatch({type:"GET_CONTACT_SUCCESS",payload:result.data.contacts})
    } catch (error) {
        dispatch({type:'GET_CONTACT_FAILED',payload:error})
    }
}
export const addContact=(contact)=> async (dispatch) =>{
    try {
        const result= await axios.post('/api/contact',contact)
        dispatch(getContact());
    } catch (error) {
        dispatch({type:'GET_CONTACT_FAILED',payload:error})
    }
}