import { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { formatDate } from "../../util/date";

interface INewsPaper {
  id: number;
  link: string;
  image: string;
  abstract: string;
  creationDate: Date;
  title: string;
}

export const NewsPapers: FC<{ newspapers: INewsPaper[] | undefined }> = ({
  newspapers,
}) => {
  const RenderNewsPaper: FC<{ newspaper: INewsPaper }> = ({ newspaper }) => {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={newspaper.image} />
          <Card.Body>
            <Card.Title>{newspaper.title}</Card.Title>
            <Card.Text>
              <p>Created on <b>{ formatDate(newspaper.creationDate) }</b></p>
            </Card.Text>
            <Card.Text>
              {newspaper.abstract}
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href={`${newspaper.link}`}>NewsPaper Link</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <div className="mt-4">
      {newspapers?.map((newspaper, key) => {
        return (
          <Col md={4}>
            <RenderNewsPaper key={key} newspaper={newspaper} />
          </Col>
        );
      })}
    </div>
  );
};
