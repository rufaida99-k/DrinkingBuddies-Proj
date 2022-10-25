import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar bg="light" varient="light" sticky="top">
      <Container>
        <Navbar.Toggle />
        <Nav className="justify-content-center" style={{ width: "100%" }}>
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/quiz">Quiz</Nav.Link>
          <Nav.Link href="/list">Compiled List</Nav.Link>
          <Nav.Link href="/meet">Meet Up</Nav.Link>
          <Nav.Link href="/places">Places Near Me</Nav.Link>
          <Nav.Link href="/bac">BAC Calculator</Nav.Link>
          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/help">Help Center</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
