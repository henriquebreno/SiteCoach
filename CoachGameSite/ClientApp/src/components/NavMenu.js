import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem,Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import  LogoImage  from '../img/Picture2.png';


export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
      return (
          <Navbar collapseOnSelect >
              <div className="pull-left nav-bar-logo  col-sm-2" style={{ backgroundColor: "grey" }}>
                  <Navbar.Brand >
                      <Link to={'/'}>
                          <img src={LogoImage} style={{ height: "100px", width: "100px" }} />
                          <span className="custon-logo-font">C h r i s G o d</span>
                      </Link>
                  </Navbar.Brand>
              </div>
              <div className="pull-right nav-bar-link col-sm-4" >         
                  
                <Nav className="mr-auto nav-bar-ul">
                      <NavItem eventKey={1} href="#">
                          Home
                        </NavItem>
                      <NavItem eventKey={2} href="#">
                          Contato
                     </NavItem>
                      <NavItem eventKey={2} href="#">
                          Dúvidas
                     </NavItem>
                </Nav>
             
              </div>
        </Navbar>
    );
  }
}
