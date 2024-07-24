import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const projects = [
  {
    title: 'Project One',
    year: '2021',
    summary: 'Summary of project one.',
    images: ['image1.jpg', 'image2.jpg'],
  },
  // Add more projects as needed
]

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.images[0]} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.year}</Card.Subtitle>
                <Card.Text>{project.summary}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Projects
