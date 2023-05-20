import React from 'react'
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'


// FUNCTIONS DEMO'ed
const Header = ({headerimg}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showVerticalBar, setShowVerticalBar] = useState(false);
  const toRotate = ["Software Developer", "Full-Stack Developer", "Data Scientist"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300-Math.random() * 100);
  const period = 2000;

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
    console.log(gradientStops[index]);
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
      setDelta(500);
      setShowVerticalBar(true);
    } else {
      setShowVerticalBar(true);
    }
  }  

  return (
    <section className="header" id="home">
       <Container fluid className="full-width-container">
          <Row className="align-items-center">
            <Col className="left" xs={12} md={6} xl={7}>
              <span className="tagline">Transforming Ideas into Reality</span>
              <h1>
                Hi, I'm Summer Ngo
                <div className="wrap">
                  I am a <span style={{ backgroundImage: `linear-gradient(to right, ${getGradientColor()})` }}>{text}</span>
                  {showVerticalBar && <span className="vertical-bar" style={{ backgroundImage: `linear-gradient(to right, ${getGradientColor()})` }}>|</span>}
                </div>
              </h1>
              <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5} className="text-center">
              <img src={headerimg} alt="Header"></img>

            </Col>
          </Row>   
       </Container>
    </section>
  )
}

export default Header