import { FC } from "react";
import { Modal, Card } from "react-bootstrap";
import { INewsPaperDetails } from "../../interfaces/INewsPaperDetails";
import { formatDate } from "../../util/date";

const NewsPaper: FC<{
  newspaper: INewsPaperDetails | null;
  showModal: boolean;
  handleClose: () => void;
}> = ({ newspaper, showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{newspaper?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={newspaper?.image} />
          <Card.Body>
            <Card.Title>{newspaper?.title}</Card.Title>
            <Card.Text>
              <p>
                Created on <b>{formatDate(newspaper?.creationDate!)}</b>
              </p>
            </Card.Text>
            <Card.Text>{newspaper?.abstract}</Card.Text>
            <Card.Text>published by <b>{newspaper?.publisher.names}</b></Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link target="_blank" href={`${newspaper?.link}`}>NewsPaper Link</Card.Link>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default NewsPaper;
