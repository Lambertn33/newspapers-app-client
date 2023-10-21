import { FC } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export interface IPublisher {
  id: number;
  names: string;
  joinedDate: Date;
  _count: {
    newsPapers: number;
  };
}

interface NewsPapersManage {
  title: string;
  showModal: boolean;
  publishers: IPublisher[];
  handleClose: () => void;
}

export const Manage: FC<{ data: NewsPapersManage }> = ({ data }) => {
  const { handleClose, showModal, title, publishers } = data;
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Newspaper title</Form.Label>
            <Form.Control type="text" placeholder="newspaper title" autoFocus />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Newspaper link</Form.Label>
            <Form.Control
              type="url"
              autoFocus
              placeholder="http://example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Newspaper image</Form.Label>
            <Form.Control type="file" autoFocus accept="image/*" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Newspaper Author</Form.Label>
            <Form.Select aria-label="Default select example">
              <option selected disabled>
                Select publisher
              </option>
              {publishers.map((publisher) => (
                <option value={publisher.id}>{publisher.names}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Creation Date</Form.Label>
            <Form.Control
              type="date"
              autoFocus
              max={new Date().toISOString().split("T")[0]}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Newspaper Abstract</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Create Newspaper
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
