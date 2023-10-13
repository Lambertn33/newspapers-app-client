import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

import newsLettersImage from '../../assets/newsletters.png';

import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="light">
      <Container className={styles.container}>
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
  );
};

export default Header;
