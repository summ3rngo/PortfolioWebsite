import React from 'react'
import './Contact.css'
import { Container, Row, Col} from 'react-bootstrap'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 991 });

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Contact-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ sucess: true, message: 'Message sent sucessfully' })
    } else {
      setStatus({ sucess: false, message: 'Something went wrong, please try again later'})
    }
  };

  return (
    <section id='contact' className='section-header'>
      <h1> Let's Work <br></br> Together </h1>
      <Container className={isSmallScreen ? 'w-100 h-70 custom-container' : 'w-50 h-75 custom-container'}>
        <form onSubmit={handleSubmit}>
        <Row className='align-items-center'>
          <Col xl={6} className='px-1'>
            <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
          </Col>
          <Col xl={6} className='px-1'>
            <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12} className='px-1'>
            <input type='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)}/>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12} className='px-1'>
            <input type='tel' value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)}/>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12} className='px-1'>
            <textarea row='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
            <button id='send-btn' type="submit"><span>{buttonText}</span></button>
          </Col>

          {
            status.message &&
            <Col sm={12} md={12} lg={12} xl={12}> <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
            </Col>
          }
        </Row>
        </form>
      </Container>
      </section>
  )
}

export default Contact