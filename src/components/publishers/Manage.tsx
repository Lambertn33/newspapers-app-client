import { FC, useRef, FormEvent } from "react";
import { Modal, Form, Button } from "react-bootstrap";

interface PublishersManage {
  title: string;
  showModal: boolean;
  handleClose: () => void;
}

export const Manage: FC<{
  data: PublishersManage;
  onCreatePublisher: Function;
}> = ({ data, onCreatePublisher }) => {
  const { handleClose, showModal, title } = data;

  const namesRef = useRef<HTMLInputElement>(null);
  const joinedDateRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      names: namesRef.current?.value,
      joinedDate: joinedDateRef.current?.value,
    };
    onCreatePublisher(data);
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Form onSubmit={submitFormHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Publisher names</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="publisher names"
              ref={namesRef}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Joining date</Form.Label>
            <Form.Control
              required
              ref={joinedDateRef}
              type="date"
              max={new Date().toISOString().split("T")[0]}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Create Publisher
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
