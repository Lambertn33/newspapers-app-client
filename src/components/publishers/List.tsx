import { FC } from "react";
import { Table } from "react-bootstrap";
import { formatDate } from "../../util/date";

interface Publisher {
  id: number;
  names: string;
  joinedDate: Date;
  _count: {
    newsPapers: number;
  };
}

export const List: FC<{ data: Publisher[] }> = ({ data }) => {
  return (
    <Table striped bordered hover>
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

