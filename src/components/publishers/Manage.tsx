import { FC } from "react";
import { Modal, Form, Button } from "react-bootstrap";

interface PublishersManage {
  title: string;
  showModal: boolean;
  handleClose: () => void;
}

export const Manage: FC<{ data: PublishersManage }> = ({ data }) => {
  const {handleClose, showModal, title} = data
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Publisher names</Form.Label>
            <Form.Control type="text" placeholder="publisher names" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Joining date</Form.Label>
            <Form.Control
              type="date"
              max={new Date().toISOString().split("T")[0]}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Create Publisher
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
