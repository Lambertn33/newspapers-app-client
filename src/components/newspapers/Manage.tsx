import { FC, FormEvent, useState } from "react";
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

export const Manage: FC<{ data: NewsPapersManage, onCreateNewsPaper: Function }> = ({ data, onCreateNewsPaper }) => {
  const { handleClose, showModal, title, publishers } = data;
  const [formData, setFormData] = useState({
    newspaperTitle: "",
    newspaperLink: "",
    newspaperImage: null,
    newspaperPublisher: {},
    newspaperCreationDate: "",
    newspaperAbstract: "",
  });

  const handleFormChange = (e: any) => {
    const { name, value, type, files } = e.target;
    if (name === "newspaperPublisher") {
      const selectedId = value;
      const selectedPublisher = publishers.find(
        (publisher) => publisher.id.toString() === selectedId
      );

      setFormData({
        ...formData,
        newspaperPublisher: {
          id: selectedPublisher?.id!,
          names: selectedPublisher?.names!,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "file" ? files[0] : value,
      });
    }
  };

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    onCreateNewsPaper(formData);
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Form onSubmit={submitFormHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Newspaper title</Form.Label>
            <Form.Control
              type="text"
              required
              name="newspaperTitle"
              onChange={handleFormChange}
              placeholder="newspaper title"
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Newspaper link</Form.Label>
            <Form.Control
              name="newspaperLink"
              required
              onChange={handleFormChange}
              type="url"
              autoFocus
              placeholder="http://example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Newspaper image</Form.Label>
            <Form.Control
              name="newspaperImage"
              required
              onChange={handleFormChange}
              type="file"
              autoFocus
              accept="image/*"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Newspaper Author</Form.Label>
            <Form.Select
              name="newspaperPublisher"
              required
              onChange={handleFormChange}
            >
              <option>Select publisher</option>
              {publishers.map((publisher) => (
                <option key={publisher.id} value={publisher.id}>
                  {publisher.names}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Creation Date</Form.Label>
            <Form.Control
              name="newspaperCreationDate"
              onChange={handleFormChange}
              required
              type="date"
              autoFocus
              max={new Date().toISOString().split("T")[0]}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Newspaper Abstract</Form.Label>
            <Form.Control
              as="textarea"
              required
              rows={3}
              name="newspaperAbstract"
              onChange={handleFormChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Create Newspaper
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
