import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Card>
        <Card.Body>
          <Card.Title>Ooops!</Card.Title>
          <Card.Text>
             The page you are looking is not available
          </Card.Text>
          <Card.Text>
            <Link to="/">
              <Button variant="primary">Return Home</Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NotFound;
