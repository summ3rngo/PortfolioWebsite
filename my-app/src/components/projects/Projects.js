import React from 'react'
import './Projects.css'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from '../projects/ProjectCard.js'
import ProjImg1 from '../../assets/Proj1Img.png'
import ProjImg2 from '../../assets/Proj2Img.png'
import ProjImg3 from '../../assets/HMSCoverImg.jpg'


const Projects = () => {
  const projects =  [
    {
      title: 'Artfolia',
      description: 'Full-Stack Web Application',
      imgURL: ProjImg1,
      alt: 'Artfolia Project Image',
    }, 
    {
      title: 'Unihatch',
      description: 'Full-Stack Web Application',
      imgURL:  ProjImg2,
      alt: 'Unihatch Project Image',
    }, 
    {
      title: 'Hospital Management System',
      description: 'Object-Oriented Programming in Java',
      imgURL: ProjImg3,
      alt: 'Hospital Management System Project Image',
    }, 

  ]
  return (
    <section id='projects' className='section-header'>
       <h1> Projects </h1>
       <p> Here you can explore some of the exciting projects I've worked on.
         Click on each project to learn more about its details, 
         functionalities, and technologies used. If you're interested in 
         exploring the code, you can also find the project repositories on 
         GitHub. Feel free to dive in and discover the innovative solutions 
         I've crafted.</p>
       <Container fluid className='custom-container-about'>
       <Row className='gx-10 justify-content-center'>
        {
          projects.map((project, index) => {
            return (
              <ProjectCard 
              key={index}
              {...project}
              />
            )
          })
        }
       </Row>
       </Container>
    </section>
  )
}

export default Projects