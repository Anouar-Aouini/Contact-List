import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getContact} from '../../Redux/Actions/actions'
import Contact from '../Contact/contact'

const Contactlist = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    useEffect(() =>dispatch(getContact()),[])
  return (
    <div>
        <h1>Contact list</h1>
        {contacts.map((el,ind)=><Contact key={el._id} contact={el}/>)}
    </div>
  )
}

export default Contactlist
