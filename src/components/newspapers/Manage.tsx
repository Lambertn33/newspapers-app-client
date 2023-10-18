import { FC } from "react";
import { Modal, Form, Button } from "react-bootstrap";

interface NewsPapersManage {
  title: string;
  showModal: boolean;
  handleClose: () => void;
}

export const Manage: FC<{ data: NewsPapersManage }> = ({ data }) => {
  const { handleClose, showModal, title } = data;
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
