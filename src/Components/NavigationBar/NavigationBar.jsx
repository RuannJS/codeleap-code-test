import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./NavigationBar.scss";
import LogoutModal from "./LogoutModal";
import { useState } from "react";

const NavigationBar = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>CodeLeap Network</Navbar.Brand>
          <Nav className="me-end">
            <Nav.Link onClick={() => setModalShow(true)} Logout>
              <span className="logout-link">Logout</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <LogoutModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default NavigationBar;
