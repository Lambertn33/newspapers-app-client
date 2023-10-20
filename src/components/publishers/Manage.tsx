import { FC, useRef, FormEvent, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { IPublisherInputs } from "../../interfaces/IPublisherInputs";

interface PublishersManage {
  title: string;
  showModal: boolean;
  handleClose: () => void;
  isEditing: boolean;
  publisherToEdit: IPublisherInputs | null;
}

export const Manage: FC<{
  data: PublishersManage;
  onManagePublisher: Function;
}> = ({ data, onManagePublisher }) => {
  const { handleClose, showModal, title, publisherToEdit, isEditing } = data;

  const names = publisherToEdit ? publisherToEdit.names : "";
  const joinedDate = publisherToEdit ? new Date(publisherToEdit.joinedDate).toISOString().split("T")[0] : "";

  const namesRef = useRef<HTMLInputElement>(null);
  const joinedDateRef = useRef<HTMLInputElement>(null);

  const buttonVariant = isEditing ? "success" : "primary";

  useEffect(() => {
    if (namesRef.current) {
      namesRef.current.value = names;
    }
    if (joinedDateRef.current) {
      joinedDateRef.current.value = joinedDate;
    }
  }, [names, joinedDate]);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      id: isEditing ? publisherToEdit?.id : null,
      names: namesRef.current?.value,
      joinedDate: joinedDateRef.current?.value,
    };
    onManagePublisher(data);
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
          <Button variant={buttonVariant} type="submit">
            {isEditing ? "Update Publisher" : "Create Publisher" }
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};