import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Card_1() {
  return (
    <div className='cards pb-5'  >
        <Row  >
           <Col sm>
              <Card className='rounded-0 border border-0 ' style={{ width: '20rem'}}>
                <Card.Img variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=297&hei=167&fit=crop" />
                <Card.Body>
                <Card.Title className='cardh' style={{overflowY:'hidden'}}>Surface Laptop 5</Card.Title>
                <Card.Text>
                Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.
                </Card.Text>
               </Card.Body>
      
               <Card.Body>
               <Card.Link  href="#" className='line'>Learn More <i class="fa-solid fa-greater-than ps-1"></i></Card.Link>
               </Card.Body>
              </Card>
           </Col>

           <Col sm>
           <Card className='rounded-0 border border-0' style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=297&hei=167&fit=crop" />
                <Card.Body>
                <Card.Title className='cardh' style={{overflowY:'hidden'}}>Surface Laptop Studio</Card.Title>
                <Card.Text>
                Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.
                </Card.Text>
               </Card.Body>
      
               <Card.Body>
               <Card.Link className='line' href="#">Learn More <i class="fa-solid fa-greater-than ps-1"></i></Card.Link>
               </Card.Body>
              </Card>
           </Col>

           <Col sm>
           <Card className='card3 rounded-0 border border-0' style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=297&hei=167&fit=crop" />
                <Card.Body>
                <Card.Title className='cardh' style={{overflowY:'hidden'}}>Xbox Series X</Card.Title>
                <Card.Text>
                The fastest, most powerful Xbox ever.
                </Card.Text>
               </Card.Body>
      
               <Card.Body>
               <Card.Link className='line' href="#">Shop Xbox Series X <i class="fa-solid fa-greater-than ps-1"></i></Card.Link>
               </Card.Body>
              </Card>
           </Col>

           <Col sm>
           <Card className='card4 border border-0 ' style={{ width: '20rem' }}>
                <Card.Img  variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=297&hei=167&fit=crop" />
                <Card.Body>
                <Card.Title className='cardh' style={{overflowY:'hidden'}}>Xbox Series S</Card.Title>
                <Card.Text>
                Next-Gen Performance in smallest X-box Ever img
                </Card.Text>
               </Card.Body>
      
               <Card.Body>
               <Card.Link  className='line' href="#">Shop Xbox Series S<i class="fa-solid fa-greater-than ps-1"></i></Card.Link> <br /> 
               <Card.Link  className='line' href="#">For up to six people <i class="fa-solid fa-greater-than ps-1"></i></Card.Link> 

               </Card.Body>
              </Card>
           </Col>
       </Row>
    </div>
  )
}

export default Card_1