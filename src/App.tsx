import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

import {  NewsPapers } from "./pages/newspapers";
import { Publisher, Publishers } from "./pages/publishers";
import Home from "./pages/Home";

import newsLettersImage from './assets/newsletters.png';

import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      
      {/* Navbar */}
      <Navbar expand="lg" bg="primary" data-bs-theme="light">
      <Container className={styles.nav_container}>
        <Navbar.Brand href="/" className={styles.navbar_brand}>
          <img src={newsLettersImage} alt="" width={40}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.navbar_nav}`}>
            <Link to="/">Home</Link>
            <Link to="/publishers">Publishers</Link>
            <Link to="/newspapers">NewsPapers</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* Navbar */}

      <Container className={styles.container}>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="newspapers" element={<NewsPapers />} />

              <Route path="publishers" element={<Publishers />} />
              <Route path="publishers/:id" element={<Publisher />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
