import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero() {
  return (
    <Carousel controls={false} style={{ width: '100%' }}>
      <Carousel.Item interval={1000}>
        <div>
          <Row className='caro1 g-0 p-0 m-0' >
            <Col xs={12} lg={5} style={{ backgroundColor: 'skyblue' }} className='row1'>
              <div style={{ width: '100%', textAlign: 'left' }}>
                <p className='p1 mb-3'>Maximise the everyday with Microsoft 365</p>
                <p className='mb-3'>
                  Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.
                </p>
                <button style={{ backgroundColor: '#0067BB' }} className=' text-white p-2 border-0 '>For One Person
                </button> <a className='a1 text-black ps-3' href=""> For up to six people  <img style={{ width: '15px' }} src="https://cdn-icons-png.flaticon.com/128/6283/6283257.png?ga=GA1.1.2056408070.1691060330&semt=ais" alt="" /></a>


              </div>
            </Col>
            <Col xs={12} lg={7}>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-M365-Anthem-Attract-Image-Create:VP2-859x540" alt="" />
            </Col>
          </Row>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div>
          <Row className=' g-0'>
            <Col  ><img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP2-859x540" alt="" /></Col>
            <Col  style={{ backgroundColor: 'rgba(242,242,242,255)' }} className='caro2 ' >
              <h1 style={{ textDecoration: 'none' }} className='ps-3'>Surface pro 9</h1>
              <p className='ps-3'>Tablet versatility and laptop power — all in one ultra-portable device</p>
              <div className='ps-3'><button style={{ backgroundColor: 'rgba(0,103,184,255)' }} className='border-0 p-2 '><a href="" className='a2 text-white'>Learn More</a></button></div>
            </Col>
          </Row>

        </div>

      </Carousel.Item>

    </Carousel>
  )
}

export default Hero