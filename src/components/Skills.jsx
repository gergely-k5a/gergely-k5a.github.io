import React from 'react'
import { Container, ProgressBar } from 'react-bootstrap'

const skills = [
  { name: 'Semantic HTML', level: 8 },
  { name: 'Stylesheets', level: 7 },
  { name: 'JavaScript', level: 9 },
  { name: 'TypeScript', level: 6 },
  { name: 'React', level: 8 },
]

const Skills = () => {
  return (
    <Container id="skills" className="my-5">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="my-3">
          <h5>{skill.name}</h5>
          <ProgressBar now={skill.level * 10} label={`${skill.level}/10`} />
        </div>
      ))}
    </Container>
  )
}

export default Skills
