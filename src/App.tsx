import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { NewsPaper, ManageNewsPaper, NewsPapers } from "./pages/newspapers";
import { Publisher, Publishers, ManagePublisher } from "./pages/publishers";
import Home from "./pages/Home";

import Header from "./components/header/Header";

import styles from './App.module.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Container className={styles.container}>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="newspapers" element={<NewsPapers />} />
              <Route path="newspapers/:id" element={<NewsPaper />} />
              <Route path="newspapers/manage" element={<ManageNewsPaper />} />

              <Route path="publishers" element={<Publishers />} />
              <Route path="publishers/:id" element={<Publisher />} />
              <Route path="publishers/manage" element={<ManagePublisher />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
