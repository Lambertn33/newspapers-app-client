import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchPublishers } from "../../store/publishers/publishersSlice";

import { Header as PublishersHeader } from "../../components/publishers/Header";
import { List as PublishersList } from "../../components/publishers/List";

const Publishers = () => {
  const dispatch = useAppDispatch();
  const { publishers, status } = useAppSelector((state) => state.publishers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPublishers());
    }
  }, [status, dispatch]);

  return (
    <Row>
      <PublishersHeader />
      <Col md={{ span: 10, offset: 1 }}>
        <PublishersList data={publishers} />
      </Col>
    </Row>
  );
};

export default Publishers;
