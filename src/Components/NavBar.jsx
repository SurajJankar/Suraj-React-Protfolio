import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import Footer from './Footer';

function NavBar() {

  return (
    <>
      <Navbar expand="lg" className="bg-white fixed-top">
        <Container>
          
          <Navbar.Toggle className='text-white' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page">
                    <i className="fasolid fa-solid fa-house"></i><br />Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/About" className="nav-link" aria-current="page">
                    <i className="fasolid fa-solid fa-regular fa-id-badge"></i><br />About
                  </NavLink>
                </li> 
                <li className="nav-item">
                  <NavLink to="/Exprience" className="nav-link" aria-current="page">
                    <i className="fasolid fa-solid fa-user-tie"></i><br />Experience
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Work" className="nav-link" aria-current="page">
                    <i className="fasolid fa-solid fa-briefcase"></i><br />Work
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Media" className="nav-link" aria-current="page">
                    <i className="fasolid fa-solid fa-image"></i><br />Media
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Contact" className="nav-link" aria-current="page">
                    <i className="fasolid fa-solid fa-comment"></i><br />Contact
                  </NavLink>
                </li>
              </ul>
            </Nav>
            <Navbar.Brand className='text-dark'><h3><strong>SuRaJ</strong></h3></Navbar.Brand>
            <a href='#' className="nav-link text-center" aria-current="page">
              <i className="fasolid fa-solid fa-circle-down"></i><br />Resume
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
}

export default NavBar;
