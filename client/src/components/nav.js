import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImageHS from "./images/HubSpot.png";
// import ImageST from "./images/Stannp.com Logo - Dark.png";

function Navigation() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-secondary font-link">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/logOn">Log in</Nav.Link>
            <Nav.Link href="/signUp">Sign Up</Nav.Link>
            <Nav.Link href="/landingPage">Stannp API</Nav.Link>
            <Nav.Link href="/createRecipient">Create Recipient</Nav.Link>
            <Nav.Link href="/recipientList">Individual Recipients</Nav.Link>
            <Nav.Link href="/recipientGroups">Recipient Groups</Nav.Link>

            <NavDropdown title="Campaign" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/postType">
                Select Post Type
                </NavDropdown.Item>
              <NavDropdown.Item href="/options">
                Select Post Options
              </NavDropdown.Item>
              <NavDropdown.Item href="/recipientDataSelect">
                Recipient Data
              </NavDropdown.Item>
              <NavDropdown.Item href="/designPage">
                Select your Design
              </NavDropdown.Item>
              <NavDropdown.Item href="/booking">
                Book Campaign
              </NavDropdown.Item>
            </NavDropdown>
          {/* <Navbar.Brand href="/landingPage"><img src={ImageST} alt="Logo" style={{width: "100px", marginLeft: "", marginRight: ""}}/></Navbar.Brand> */}
          <Navbar.Brand href="/landingPage"><img src={ImageHS} alt="Logo" style={{width: "150px", marginLeft: "900px", marginRight: "0px" }}/></Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navigation;
