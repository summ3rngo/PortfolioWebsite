import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title, description, imgURL, alt}) => {
  return (
    <Col sm={12} md={4}>
        <div className='proj-imgbx'>
            <img src={imgURL} alt={alt} />
            <div className='proj-text'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard