import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo_h from "../Assets/logo_h.png"
import "./Al_haram_link_header.css"
import {Link} from "react-router-dom"

function Al_haram_link_header() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="light" className='new_responive_nav' variant="light">
      <div className='p-0 container-fluid'>
        <Navbar.Brand href="#home" className='logo_mar me-auto d-flex justify-content-start'> <Link to='/'><img src={logo_h} className='logo_main_header me-auto'  alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
          <NavDropdown title="Packages" className='header_links drop_nav_links ' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to='/Umrah_package' className='drop_nav_links'>Umrah Packages </Link > </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
            <Link to='/hajj_packages' className='drop_nav_links'> Hajj packages</Link>   
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> <Link to='/Land_packagess' className='drop_nav_links' >Land Packages</Link> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> <Link to='flight' className='drop_nav_links' >Flight</Link> </NavDropdown.Item>
           
            </NavDropdown>

            <Nav.Link href="#features" className='header_links'><Link to='/Main_umraPlane'className='drop_nav_links' >Plan My Umrah</Link></Nav.Link>
            <Nav.Link href="#pricing" className='header_links'> <Link to='explore'className='drop_nav_links' >Explore</Link> </Nav.Link>
            <Nav.Link href="#pricing" className='header_links'> <Link to='catering'className='drop_nav_links' >Catering</Link> </Nav.Link>
            <Nav.Link href="#pricing" className='header_links'> <Link to='/Vise'className='drop_nav_links' >Visa Info</Link> </Nav.Link>
            <Nav.Link href="#pricing" className='header_links'><Link to='cabs'className='drop_nav_links' >Buses</Link></Nav.Link>

           
          </Nav>
          <Nav className='d-flex justify-content-end  ms-auto text-info'>
          <NavDropdown title={<span className='drop_down_title'>USD</span>} className='header_drop ' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"  >PKR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                INR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BDT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MYR</NavDropdown.Item>
          
            </NavDropdown>

            <NavDropdown title={<span className='drop_down_title'>ENG</span>} className='header_drop ssssss' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">URDU</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                MALAY
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HINDI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BANGLA</NavDropdown.Item>
              
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </div>
  )
}

export default Al_haram_link_header
