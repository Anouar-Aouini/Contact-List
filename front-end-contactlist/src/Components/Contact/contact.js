import React from 'react'
import {Card,Button} from "react-bootstrap"

const Contact = ({contact}) => {
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{contact.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{contact.email}</Card.Subtitle>
      <Button variant="primary">Edit</Button>
      <Button variant="primary">Delete</Button>
    </Card.Body>
    </Card>
  )
}

export default Contact
