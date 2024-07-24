import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2023 Your Name</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="#home" className="text-white mr-3">
              Home
            </a>
            <a href="#bio" className="text-white mr-3">
              Bio
            </a>
            <a href="#skills" className="text-white mr-3">
              Skills
            </a>
            <a href="#projects" className="text-white mr-3">
              Projects
            </a>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
