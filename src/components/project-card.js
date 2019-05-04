import React from 'react'
import './projects.css'

const ProjectCard = props => (
  <div className="Card">
    <img src={props.logo} />
    <h3>{props.name}</h3>
    <p>{props.tech}</p>
  </div>
)

export default ProjectCard
