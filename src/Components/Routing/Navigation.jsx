import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./index.css";

const Navigation = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: "250px" }} navbarScroll>
            <Nav.Link>
              <Link className="link" style={style} to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" style={style} to={"/about"}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" style={style} to={"/contact"}>
                Contact
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link className="link" style={style} to={"/:id"}>
                Services
              </Link>
            </Nav.Link> */}

            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-auto" aria-label="Search" />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
