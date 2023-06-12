import React from 'react'
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle, Download } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
import { ReactComponent as Planet } from '../../assets/Saturn.svg'
import { ReactComponent as Stars} from '../../assets/stars.svg'
import { Link } from 'react-scroll';
import HeaderImg from '../../assets/headerImg.png'
import HeaderImgCircle from '../../assets/circlepfp.png'
import { useMediaQuery } from 'react-responsive'


// FUNCTIONS DEMO'ed
const Header = ({headerimg, updateActiveLink, active}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showVerticalBar, setShowVerticalBar] = useState(false);
  const toRotate = ['Software Developer', 'Full-Stack Developer', 'Data Scientist'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300-Math.random() * 100);
  const period = 2000;
  const isMediumScreen = useMediaQuery({ maxWidth: 767.68 });

  useEffect(() => {
    let ticker = setInterval(() => {
        tick();

    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const getGradientColor = () => {
    const gradientStops = ['rgba(228,212,255,0.5)', 'rgba(142,117,224,0.5)'];
    const percentage = (text.length / toRotate[loopNum % toRotate.length].length) * 100;
    const index = Math.floor((percentage / 100) * (gradientStops.length - 1));
    return gradientStops[index];
  };

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
      setShowVerticalBar(false);

    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
      setShowVerticalBar(true);
    } else {
      setShowVerticalBar(true);
    }
  }  

  return (
    <section className='header' id='home'>
       <div className='headerImgCircle-container' style={{display: isMediumScreen ? 'flex' : 'none'}}>
                <img src={HeaderImgCircle} alt='Header'></img>
              </div>
       <Container fluid className='full-width-container'>
          <Row className='align-items-center'>
            <Col className='left' xs={12} md={6} lg xl={7}>
              <span className='tagline'>Transforming Ideas into Reality</span>
              <h1> <span className='intro'> Hi! I am <br></br> </span>
                  Summer Ngo
                <div className='wrap'>
                  <span style={{ backgroundImage: `linear-gradient(to right, ${getGradientColor()})` }}>{text}</span>
                  {showVerticalBar && <span className='vertical-bar' style={{ backgroundImage: `linear-gradient(to right, ${getGradientColor()})` }}>|</span>}
                </div>
              </h1>

              <div className='buttons'>
                <button className='btn btn-primary' id='download-btn' onClick={() => console.log('connect')}>Download Resume<Download style={{ marginLeft: '10px'}} size={27} /></button>
                <Link className={active === 'projects' ? 'btn btn-primary active' : 'btn btn-primary'} id='project-btn' activeClass="active" smooth duration={100} spy to="projects" onClick={() => updateActiveLink('projects')}>See Projects<ArrowRightCircle style={{ marginLeft: '10px'}} size={27} /></Link>
              </div>
              
            </Col>
            <Col xs={12} md={6} xl={5} className='text-center custom-col'>
              <Planet id='planet-svg' className='background-svg' size={75}/>
              <Stars id='stars-svg' className='background-svg' />
              <div className='headerImg-container'>
                <img src={HeaderImg} alt='Header'></img>
              </div>
            </Col>
          </Row>   
       </Container>
    </section>
  )
}

export default Header