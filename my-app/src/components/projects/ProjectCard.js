import React from 'react'
import { Col } from 'react-bootstrap'
import ProjImg1 from '../../assets/Proj1Img.png'
import ProjImg2 from '../../assets/Proj2Img.png'

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