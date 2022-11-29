// import React, { Component } from 'react';
import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashRouter, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Toggle />
        <Nav className="justify-content-center" style={{ width: "100%" }}>
          <Link className="text-link" to="/">
            Home
          </Link>
          <Link className="text-link" to="/quiz">
            Quiz
          </Link>
          <Link className="text-link" to="/list">
            Compiled List
          </Link>
          <Link className="text-link" to="/places">
            Places Near Me
          </Link>
          <Link className="text-link" to="/bac">
            BAC Calculator
          </Link>
          <Link className="text-link" to="/faq">
            FAQ
          </Link>
          <Link className="text-link" to="/help">
            Help Center
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
