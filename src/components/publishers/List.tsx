import { FC } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { formatDate } from "../../util/date";

interface Publisher {
  id: number;
  names: string;
  joinedDate: Date;
  _count: {
    newsPapers: number;
  };
}

export const List: FC<{
  handleShow: (publisher?: any) => void;
  data: Publisher[];
  deletePublisher: (id: number) => Promise<void>;
}> = ({ data, deletePublisher, handleShow }) => {
  
  const onHandleShow = (publisher: Publisher) => {
    const publisherToEdit: any = {
      id: publisher.id,
      names: publisher.names,
      joinedDate: publisher.joinedDate,
    };
    handleShow(publisherToEdit);
  };

  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>publisher names</th>
          <th>date of joining</th>
          <th>number of newspapers</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {data.map((publisher, key) => (
          <tr key={key}>
            <td>{++key}</td>
            <td>{publisher.names}</td>
            <td>{formatDate(publisher.joinedDate)}</td>
            <td>{publisher._count.newsPapers}</td>
            <td className="d-flex justify-content-around align-items-center">
              <Link to={`/publishers/${publisher.id}`}>More</Link>
              <Button
                className="btn-sm"
                variant="warning"
                onClick={() => onHandleShow(publisher)}
              >
                Edit
              </Button>
              <Button
                className="btn-sm"
                variant="danger"
                onClick={() => deletePublisher(publisher.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
