import React from 'react'
import './About.css'
import {HeartFill} from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
import { Row, Container, Col} from 'react-bootstrap'
import { GeoAltFill, Envelope } from 'react-bootstrap-icons'
import { ReactComponent as PlanetBullet } from '../../assets/planet-bullet.svg'
import { useMediaQuery } from 'react-responsive'
import AboutImg from '../../assets/aboutImg.jpeg'

export const About = () => {
const [active, setActive] = useState('personal');
const isSmallScreen = useMediaQuery({ maxWidth: 767.98 });

const updateActiveLink = (value) => {

  setActive(value);
  console.log(value);
  
}
const [availableHeight, setAvailableHeight] = useState(0);

  useEffect(() => {
    const updateAvailableHeight = () => {
      const navbarHeight = document.getElementById('top-section').clientHeight; // Get the height of the navbar
      const valuesHeadingHeight = document.getElementById('values-heading').clientHeight;
      let aboutSectionHeight = 0;
      if (valuesHeadingHeight > 0) {
        aboutSectionHeight = window.innerHeight - navbarHeight - valuesHeadingHeight;
      } else {
        aboutSectionHeight = window.innerHeight - navbarHeight; 
      }// Calculate the available height by subtracting the navbar height from the window height

      setAvailableHeight(aboutSectionHeight);
      console.log(aboutSectionHeight);
      console.log(navbarHeight);
     
    };

    updateAvailableHeight(); // Call the function initially
    window.addEventListener('resize', updateAvailableHeight); // Update the available height on window resize

    return () => {
      window.removeEventListener('resize', updateAvailableHeight); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <section id="about" className='section-header'>
      <div id='top-section'>
      <h1> Meet <span> Summer Ngo </span> </h1>
     <div className="divider"><hr></hr><HeartFill /><hr></hr></div>
    
     <nav className="about-navbar">
      <div onClick={() => updateActiveLink('personal')} className={active==='personal' ? 'active navbar-section' : 'navbar-section'}>
        <span>Personal</span>
      </div>
      <div onClick={() => updateActiveLink('education')} className={active==='education' ? 'active navbar-section' : 'navbar-section'}>
        <span>Education</span>
      </div>
      <div onClick={() => updateActiveLink('values')} className={active==='values' ? 'active navbar-section' : 'navbar-section'}>
        <span>Values</span>
      </div>
    </nav>
    </div>

    <div id="personal-section" className={active==='personal' ? 'display about-sections' : 'about-sections nodisplay' }>
        <Row className="align-items-center gx-0" style={{ height: availableHeight, padding: '0 25px' }}>
            <Col className="text-center custom-col d-flex align-items-center justify-content-center" xs={12} md={5} xl={5}>
            <div className='img-container'>
                <img src={AboutImg} alt="Header"></img>
              </div>
            </Col>
            <Col xs={12} md={7} xl={7} className="text-left custom-col" style={{paddingLeft: '10px'}}>
                <h3 className='intro-heading'> Introduction </h3>
                <p className='intro-text'> My name is Summer Ngo, and I am currently an incoming Senior studying Biomedical Engineering with a minor in Computer Programming 
                at University of Southern California (USC). I also plan on pursing my Master's at USC through its Progressive Degree Program (PDP). Throughout
                my years in college, I began to discover my passion for programming. I find immense joy in crafting elegant code, solving complex problems, and creating innovative solutions.
                As I embark on my professional journey, I am excited to combine my interdisciplinary background in Biomedical Engineering with my passion for software development. 
                I aspire to leverage my skills to create meaningful, innovative solutions to develop cutting-edge applications and design intuitive user experiences. 
                </p>
                <hr style={{color: 'white'}}></hr>
                <div className='info' style={{color: 'white'}}>  <GeoAltFill style={{marginRight: '10px'}} /> <p> Los Angeles, California </p> </div>
                <div className='info' style={{color: 'white'}}>  <Envelope style={{marginRight: '10px'}} /> <a href="mailto:yourname@example.com"> Summ3rlinh@gmail.com </a> </div>
                
            </Col>
          </Row>   
       </div>

       <div id="education-section" className={active==='education' ? 'display about-sections' : 'about-sections nodisplay' }>
        <Row className="align-items-center gx-0" style={{ height: availableHeight, padding: '0 25px' }}>
            <Col className="text-center custom-col d-flex align-items-center justify-content-center" xs={12} md={5} xl={5}>
            <div className='img-container'>
                <img src={AboutImg} alt="Header"></img>
              </div>
            </Col>
            <Col xs={12} md={7} xl={7} className="text-left custom-col">
            <h3 className='intro-heading'> Education Timeline </h3>
            
              <h6 className='college-title'> University of Southern California <span> 2020 - 2024 </span> </h6>
              <p className='education-text'> B.S. in Biomedical Engineering with minor in Computer Programming <br></br>
              <strong>GPA:</strong> 3.86 <br></br>
              <br></br>
              <strong>Relevant Coursework: </strong>Programming in Python, Object-Oriented Programming in Java, Data Structures in C++. Full-Stack Web development, Calculus I/II/III,
              Statistical Methods (in BME) <br></br>
              <br></br>
              <strong>Experience: </strong> Teaching Assistant for Object-Oriented Programming (Jan. 2023)
               </p>
              
              <hr></hr>
              <h6 className='college-title'> University of Southern California <span> 2024 - 2025 </span> </h6>
              <p className='education-text'> M.S. in Applied Data Science <br></br> </p>

            </Col>
          </Row>   
       </div>

       <div id="values-section"  className={active==='values' ? 'display about-sections' : 'about-sections nodisplay' }>
       <h3 id='values-heading' className='intro-heading'> Core Values </h3>
       <Row className='gx-0' style={{ height: isSmallScreen ? '1200px' : availableHeight, padding: '0 25px', overflow: 'scroll' }}>
              <Col xs={12} md={6} xl={6} className="d-flex align-items-center justify-content-center">
                    <div className='values-container'>
                    <PlanetBullet className='planet-bullet' style={{
                          minWidth: isSmallScreen ? '50px' : '100px',
                          minHeight: isSmallScreen ? '50px' : '100px',
                        }}/>
                      <div className='value-text'>
                          <h5> Growth-Mindset </h5>
                          <br></br>
                          <p> Strong belief that dedication can further develop an individual's ability and intelligence. Understanding and embracing challenges/rejections
                          is important for growth.
                          </p>
                      </div>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6} className="d-flex align-items-center justify-content-center">
                    <div className='values-container'>
                    <PlanetBullet className='planet-bullet' style={{
                          minWidth: isSmallScreen ? '50px' : '100px',
                          minHeight: isSmallScreen ? '50px' : '100px',
                        }}/>
                      <div className='value-text'>
                          <h5> Intellectual Curiosity </h5>
                          <br></br>
                          <p> Having a drive to always keep learning. Continuous desire to add novel skills to my arsenal and mastering concepts by constantly building 
                            and ideating.
                          </p>
                      </div>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6} className="d-flex align-items-center justify-content-center">
                    <div className='values-container'>
                    <PlanetBullet className='planet-bullet' style={{
                          minWidth: isSmallScreen ? '50px' : '100px',
                          minHeight: isSmallScreen ? '50px' : '100px',
                        }}/>
                      <div className='value-text'>
                          <h5> Detail-Oriented </h5>
                          <br></br>
                          <p> A keen eye for recognizing meticulous details and having the urge to produce quality work. Always Ensuring that work is up to standard.
                          </p>
                      </div>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6} className="d-flex align-items-center justify-content-center">
                    <div className='values-container'>
                    <PlanetBullet className='planet-bullet'  style={{
                          minWidth: isSmallScreen ? '50px' : '100px',
                          minHeight: isSmallScreen ? '50px' : '100px',
                        }}/>
                      <div className='value-text'>
                          <h5> Integrity </h5>
                          <br></br>
                          <p> Even with challenges, I will always act on the fundamentals of honesty, accountability,
                            and good morals. 
                          </p>
                      </div>
                    </div>
                </Col>
              </Row>
            
       </div>
    </section>
  )
}

export default About