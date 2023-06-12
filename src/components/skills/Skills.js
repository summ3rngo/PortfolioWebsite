import React from 'react'
import './Skills.css'
import { Container, Row, Col } from 'react-bootstrap';
import { HeartFill } from 'react-bootstrap-icons'
import { TbMoonStars } from 'react-icons/tb'
import ProgressBar from '../skills/ProgressBar';
import { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useMediaQuery } from 'react-responsive';


const Skills = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 991 });
  const [availableHeight, setAvailableHeight] = useState(0);
  const [isHoveredBack, setIsHoveredBack] = useState(false);
  const [isHoveredForward, setIsHoveredForward] = useState(false);
  const slides = document.getElementsByClassName('slide');
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);

   
  };

  const goToPreviousSlide = () => {
    const previousSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(previousSlide);

  };


    const handleMouseEnterBack = () => {
      setIsHoveredBack(true);
    }

    const handleMouseLeaveBack = () => {
      setIsHoveredBack(false);
    }

    const handleMouseEnterForward = () => {
      setIsHoveredForward(true);
    }

    const handleMouseLeaveForward = () => {
      setIsHoveredForward(false);
    }
  
  useEffect(() => {

    const updateAvailableHeight = () => {
      const headingHeight = document.getElementById('box-heading').clientHeight;
      const availableHeight = document.getElementsByClassName('slide')[[0]].clientHeight - headingHeight;

      setAvailableHeight(availableHeight);
      console.log(headingHeight);
      console.log(availableHeight);
    };

    updateAvailableHeight(); // Call the function initially
    window.addEventListener('resize', updateAvailableHeight); // Update the available height on window resize

    return () => {
      window.removeEventListener('resize', updateAvailableHeight); // Clean up the event listener on component unmount
    };
  }, []);


  return (
    <section id="skills" className='section-header'>
      <div className='slider-buttons'  onClick={goToPreviousSlide} onMouseEnter={handleMouseEnterBack} onMouseLeave={handleMouseLeaveBack} style={{left: isSmallScreen ? '25%' : '0', opacity: isHoveredBack ? '1' : '0.5'}}>
        <IoIosArrowBack  style={{width: isSmallScreen ? '60px' : '70px', height:  isSmallScreen ? '30px' : '40px', position: 'absolute'}}/>
      </div>
      <div className='slider-buttons' onClick={goToNextSlide} onMouseEnter={handleMouseEnterForward} onMouseLeave={handleMouseLeaveForward} style={{right: isSmallScreen ? '25%' : '0',  opacity: isHoveredForward ? '1' : '0.5'}}>
        <IoIosArrowForward style={{width: isSmallScreen ? '60px' : '70px', height:  isSmallScreen ? '30px' : '40px', position: 'absolute'}} />
      </div>
      <h1> Skills </h1>
      <div className="divider" style={{marginBottom: '25px'}}><hr></hr><HeartFill /><hr></hr></div>

        <Container className='slide' style={{display: currentSlide===0 ? 'block' : 'none'}}>
          <h2 id='box-heading' className='box-heading'> Frontend </h2>
        <Row className='d-flex' style={{margin: '0 25px', height: availableHeight}}>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box">
              <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> HTML </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={80} />                
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> CSS </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={80} />
                  
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> Bootstrap </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={70} />                
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> JavaScript </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={60} />               
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> React </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={40} />                
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box"></div>
          </Col>
        </Row>
      </Container>

      <Container className='slide' style={{display: currentSlide===1 ? 'block' : 'none'}}>
          <h2 id='box-heading' className='box-heading'> Backend </h2>
        <Row className='d-flex' style={{margin: '0 25px', height: availableHeight}}>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box">
              <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> Java </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={85} />                
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> Python </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={70} />
                  
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> MySQL </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={60} />                
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> PHP </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={60} />               
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> MongoDB </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={0} />                
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box"></div>
          </Col>
        </Row>
      </Container>
      
      <Container className='slide' style={{display: currentSlide===2 ? 'block' : 'none'}}>
          <h2 id='box-heading' className='box-heading'> Other Skills </h2>
        <Row className='d-flex' style={{margin: '0 25px', height: availableHeight}}>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box">
              <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> C++ </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={40} />                
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> MATLAB </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={80} />
                  
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> R </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={20} />                
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box">
          <TbMoonStars style={{width: '35px', height: '35px', color: 'var(--primary-color)', marginRight: '25px'}}/>
              <div className='programming-skills'>
                  <h4 className='programming-text'> Figma </h4>
                  <ProgressBar bgcolor='var(--primary-color)' completed={20} />               
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
          <div className="box">
      
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={6} xl={6}>
            <div className="box"></div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Skills