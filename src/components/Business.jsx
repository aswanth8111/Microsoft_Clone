import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Business() {
  return (
    <div className='cards pb-5  '  >
        <h2 style={{overflowY:'hidden'}}>For Business</h2>
        <Row  >
           <Col sm>
              <Card className='rounded-0 border border-0' style={{ width: '20rem'}}>
                <Card.Img variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop" />
                <Card.Body>
                <Card.Title className='cardh' style={{overflowY:'hidden'}}>Surface for Business</Card.Title>
                <Card.Text>
                No matter what you do, there’s a Surface to help you do it.
                </Card.Text>
               </Card.Body>
      
               <Card.Body>
               <Card.Link  href="#" className='line'>Shop Now <i class="fa-solid fa-greater-than ps-1"></i></Card.Link>
               </Card.Body>
              </Card>
           </Col>

           <Col sm>
           <Card className='rounded-0 border border-0' style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=380&hei=213&fit=crop" />
                <Card.Body>
                <Card.Title className='cardh' style={{overflowY:'hidden'}}>Window 11 For Business</Card.Title>
                <Card.Text>
                Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.
                </Card.Text>
               </Card.Body>
      
               <Card.Body>
               <Card.Link className='line' href="#">Learn More <i class="fa-solid fa-greater-than ps-1"></i></Card.Link>
               </Card.Body>
              </Card>
           </Col>

           <Col sm>
           <Card className='card3 rounded-0 border border-0' style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=380&hei=213&fit=crop" />
                <Card.Body>
                <Card.Title className='cardh' style={{overflowY:'hidden'}}>Get Microsoft Teams for free</Card.Title>
                <Card.Text>
                Online meetings, chat and shared cloud storage – all in one place.
                </Card.Text>
               </Card.Body>
      
               <Card.Body>
               <Card.Link className='line' href="#">Sign up for Free <i class="fa-solid fa-greater-than ps-1"></i></Card.Link>
               </Card.Body>
              </Card>
           </Col>

           <Col sm>
           <Card className='card4 border border-0 ' style={{ width: '20rem' }}>
                <Card.Img  variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Visual-Studio-Icon?wid=380&hei=213&fit=crop" />
                <Card.Body>
                <Card.Title className='cardh' style={{overflowY:'hidden'}}>Visual Studio 2022</Card.Title>
                <Card.Text>
                Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.
                </Card.Text>
               </Card.Body>
      
               <Card.Body>
               <Card.Link  className='line' href="#">Download Visual Studio 2022<i class="fa-solid fa-greater-than ps-1"></i></Card.Link> <br /> 

               </Card.Body>
              </Card>
           </Col>
       </Row>
    </div>
  )
}

export default Business