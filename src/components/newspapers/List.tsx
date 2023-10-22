import { FC } from "react";
import { Table, Button } from "react-bootstrap";
import { formatDate } from "../../util/date";

interface NewsPaper {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  publisher: {
    names: string;
  };
}

export const List: FC<{ data: NewsPaper[], deleteNewsPaper: (id: number) => Promise<void>; }> = ({ data, deleteNewsPaper }) => {
  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>newspaper title</th>
          <th>published date</th>
          <th>publisher</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {data.map((newspaper, key) => (
          <tr key={key}>
            <td>{++key}</td>
            <td>{newspaper.title}</td>
            <td>{formatDate(newspaper.creationDate)}</td>
            <td>{newspaper.publisher.names}</td>
            <td>
            <Button
                className="btn-sm"
                variant="danger"
                onClick={() => deleteNewsPaper(newspaper.id)}
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
