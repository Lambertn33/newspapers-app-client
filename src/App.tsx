import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { NewsPaper, NewsPapers } from "./pages/newspapers";
import { Publisher, Publishers } from "./pages/publishers";
import Home from "./pages/Home";

import {Header as MainHeader} from "./components/header/Header";

import styles from './App.module.css'

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Container className={styles.container}>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="newspapers" element={<NewsPapers />} />
              <Route path="newspapers/:id" element={<NewsPaper />} />

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
