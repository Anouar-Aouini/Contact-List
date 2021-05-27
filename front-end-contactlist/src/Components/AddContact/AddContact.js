import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addContact} from '../../Redux/Actions/actions'

const AddContact = () => {

    const [show, setShow] = useState(false);
    const [newContact,setNewContact]=useState({name:"",email:""});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const change=(e)=>{
        setNewContact({...newContact,[e.target.name]:e.target.value})
    }
    const handleAdd=()=>{
        dispatch(addContact(newContact))
        handleClose()
    }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Contact
      </Button>
      <Modal show={show} onHide={handleClose}>
          <Modal.Title>Contact info</Modal.Title>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" name="name" onChange={(e)=>change(e)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" name="email" onChange={(e)=>change(e)}/>
  </Form.Group>
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddContact
