import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container id="contact" className="my-5">
      <h2>Contact</h2>
      <Form action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse" method="POST">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="entry.2005620554" required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="entry.1045781291" required />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="entry.839337160" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  )
}

export default Contact
