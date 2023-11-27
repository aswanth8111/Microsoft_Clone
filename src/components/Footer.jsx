import React from 'react'
import { Row , Col} from 'react-bootstrap'

function Footer() {
  return (
    <div style={{backgroundColor:'rgba(242,242,242,255)',width:'100%'}}> 
        
     <Row className='ft medhu pt-5 ps-5 pe-5'>
        <Col lg={6}>
            <Row>
              <Col sm={12} lg={4}>
              <ul style={{ listStyle:'none'}}>
               <li className='lii ' style={{color:'rgba(100,101,100,255)'}}>What's new</li>
               <li> Microsoft 365</li>
               <li>Games</li>
               <li> Surface Pro 9</li>
               <li> Surface Laptop 5</li>
               <li> Surface Laptop Go 2</li>
                <li>Windows 11 apps</li>
              </ul>
              </Col>
              <Col sm={12} lg={4}>
                <ul style={{ listStyle:'none'}}>
                  <li className='lii ' style={{color:'rgba(100,101,100,255)'}}>Microsoft Store</li>
                  <li>Account profile</li>
                  <li>Download Center</li>
                  <li>Microsoft Store Support</li>
                  <li>Returns</li>
                  <li>Order tracking</li>
                </ul>
              </Col>
              <Col sm={12} lg={4}>
                  <ul style={{ listStyle:'none'}}>
                    <li className='lii ' style={{color:'rgba(100,101,100,255)'}}>Education</li>
                    <li>Microsoft in education</li>
                    <li>Devices for education</li>
                    <li>Microsoft Teams for Education</li>
                    <li>Educator training and development</li>
                    <li>Deals for students and parents</li>
                    <li>Azure for students</li>
                  </ul>
              </Col>
            </Row>
        </Col>


        <Col lg={6}>
             <Row>
               <Col sm={12} lg={4}>
                  <ul style={{ listStyle:'none'}}>
                    <li className='lii' style={{color:'rgba(100,101,100,255)'}}>Business</li>
                    <li>Microsoft Cloud</li>
                    <li>Microsoft Security</li>
                    <li>Azure</li>
                    <li>Dynamics 365</li>
                    <li>Microsoft Advertising</li>
                    <li>Microsoft Industry</li>
                    <li>Microsoft Teams</li>
                  </ul>
               </Col>
               <Col sm={12} lg={4}>
                  <ul style={{ listStyle:'none'}}>
                     <li className='lii ' style={{color:'rgba(100,101,100,255)'}}>Developer & IT</li>
                     <li>Developer Center</li>
                     <li>Documentation</li>
                     <li>Microsoft Learn</li>
                     <li>Microsoft Tech Community</li>
                     <li>Azure Marketplace</li>
                     <li>AppSource</li>
                     <li>Visual Studio</li>
                  </ul>
               </Col>
               <Col sm={12} lg={4}>
                    <ul style={{ listStyle:'none'}}>
                      <li className='lii ' style={{color:'rgba(100,101,100,255)'}}>Company</li>
                      <li>Careers</li>
                      <li>About Microsoft</li>
                      <li>Company news</li>
                      <li>Privacy at Microsoft</li>
                      <li>Security</li>
                      <li>Sustainability</li>
                    </ul>
               </Col>
               
             </Row>

        </Col>
              <Row className='end d-flex  '>
                <Col sm={12} lg={6} className='d-flex ps-5'>
                  <p className='pe-4'><i class="fa-solid fa-earth-americas "></i>English (India)</p>
                  <p> <img style={{width:'28px', color:'gray'}} src="https://cdn-icons-png.flaticon.com/128/3100/3100288.png" alt="" /> Your Privacy Choice</p>
                </Col>

                <Col sm={12} lg={6} className='d-flex'  >
                  <p className='pe-4'>Contact Microsoft</p>
                  <p className='pe-4'>Privacy</p>
                  <p className='pe-4'>Trademark</p>
                  <p className='pe-4'>About our ads</p>
                  <p>© Microsoft 2023</p>
                </Col>
              </Row>
        </Row>  

    </div>
  )
}

export default Footer