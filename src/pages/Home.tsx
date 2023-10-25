import { Col, Card } from "react-bootstrap";

const Home = () => {
  console.log(process.env);
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Card>
        <Card.Body>
          <Card.Title>Welcome To This Application</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Newspapers Application
          </Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur quas quia facere nobis placeat illum esse velit.
            Reprehenderit veniam placeat itaque nulla dolores, possimus nesciunt
            assumenda vel. Saepe, id. Expedita?
          </Card.Text>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur quas quia facere nobis placeat illum esse velit.
            Reprehenderit veniam placeat itaque nulla dolores, possimus nesciunt
            assumenda vel. Saepe, id. Expedita?
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Home;
