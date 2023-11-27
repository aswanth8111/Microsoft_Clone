import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className=" bg-white" style={{height:'60px'}}>
      <Container fluid className='nav1'>
        <Navbar.Brand style={{width:'150px'}} className='log mb-3 ps-5 ' href="#"><img style={{width:'115px'}} src="https://i.ibb.co/wwLhz98/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="headtxt me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',width:'50rem' }}
            navbarScroll
          >
            <Nav.Link className='headtxt ps-5 ' href="#action2">Microsoft 365</Nav.Link>
            <Nav.Link href="#action2" className='' >Teams</Nav.Link>
            <Nav.Link href="#action2" >Capilot</Nav.Link>
            <Nav.Link href="#action2" >Window</Nav.Link>
            <Nav.Link href="#action2">Surface</Nav.Link>
            <Nav.Link href="#action2">Xbox</Nav.Link>
            <Nav.Link href="#action2">Support</Nav.Link>
            
            
          </Nav>
          <NavDropdown className='micro' style={{width:'150px'}} title="All Microsoft" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Software</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2" className='headtxt search-btn' style={{width:'80px'}}><i class="fa-solid fa-magnifying-glass mt-1 me-1"></i>Search</Nav.Link>
          <Nav.Link href="#action2" className='headtxt'>Cart <img className=' me-3' style={{width:'20px'}} src="https://cdn-icons-png.flaticon.com/128/649/649931.png?ga=GA1.1.2056408070.1691060330&semt=ais" alt="" /></Nav.Link>
          <Nav.Link href="#action2" className='headtxt mt-1 pe-5'>User <img style={{width:'35px'}} src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png?ga=GA1.1.2056408070.1691060330&semt=ais" alt="" /></Nav.Link>


        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  )
}

export default Header