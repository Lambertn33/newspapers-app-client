import { FC } from "react";
import { Table } from "react-bootstrap";
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

export const List: FC<{ data: NewsPaper[] }> = ({ data }) => {
  return (
    <Table striped bordered hover>
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
