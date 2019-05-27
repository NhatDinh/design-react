import React from 'react'
import '../styles/projects.css'

const ProjectCard = props => (
  <div className="Card">
    <a href={props.link}>
      <img src={props.logo} />
      <h3>{props.name}</h3>
      <p>{props.des}</p>
      <h4>Tech:</h4>
      <p>{props.tech}</p>
    </a>
  </div>
)

export default ProjectCard
