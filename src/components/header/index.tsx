import React from "react";
import { Navbar } from "react-bootstrap";
import "./styles.scss";

interface Props { }

const AppHeader = (prop: Readonly<Props>) => {
  return (
    <Navbar bg="light" expand="lg" className={'headerContainer'}>
      <Navbar.Brand href="#home" className={'headerContainer__logo'}>Frontend Assessments</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  )
}

export default AppHeader; 
