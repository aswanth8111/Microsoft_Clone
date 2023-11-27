import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Img() {
  return (
    <div className='w-100 text-white' style={{paddingBottom:'7rem'}}>
       <Row className='w-100' >
         <Col sm={5}  className='xbox' style={{backgroundColor:'rgba(26,26,26,255)'}}>
           <div style={{paddingLeft:'6rem' , paddingTop:'10rem'}} >
              <div style={{overflowY:'hidden'}}>
                <h2 style={{overflowY:'hidden'}}>Xbox Game Pass</h2>
                <h2 style={{overflowY:'hidden'}}>Ultimate</h2>
              </div>
              <p >Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console and PC.</p>
              
              <button className='p-2 border border-0 text-white' style={{backgroundColor:'#0067BB'}}>Join Now</button>
           </div>
         </Col>
         <Col sm={7}><img className='c1 w-100 '  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-AEM-Game-Pass-Ultimate:VP3-1083x600" alt="" /></Col>
       </Row>
    </div>
  )
}

export default Img