import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero_3() {
  return (
    <div className='icon' style={{}}>
      <Row  className='w-75 mx-auto' style={{textAlign:'center',paddingBottom:'5rem',paddingTop:'5rem'}}>
        <Col sm={6} lg>
           <div>
            <img style={{width:'40px'}} src="https://cdn-icons-png.flaticon.com/128/732/732076.png?ga=GA1.1.2056408070.1691060330&semt=ais" alt="" />
            </div>
            <a className='icona' href="">Choose your Microsoft 365</a>
        </Col>
        <Col sm={6} lg>
            <div>
            <img style={{width:'40px'}} src="https://cdn-icons-png.flaticon.com/128/1/1321.png?ga=GA1.1.2056408070.1691060330&semt=ais" alt="" />
            </div>
            <a className='iconb'  href="">Buy Xbox games and consoles</a>
        </Col>
        <Col sm={6} lg>
            <div>
            <img style={{width:'40px'}} src="https://cdn-icons-png.flaticon.com/128/732/732076.png?ga=GA1.1.2056408070.1691060330&semt=ais" alt="" />
            </div>
            <a  className='icona' href="">Get Windows 11</a>
        </Col>
        <Col sm={6} lg>
           <div>
            <img style={{width:'40px'}} src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-go2-link-list-120x120?wid=40&hei=40" alt="" />
            </div>
            <a className='icona' href="">Explore Surface devices</a>
        </Col>
      </Row>
    </div>
  )
}

export default Hero_3