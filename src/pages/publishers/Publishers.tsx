import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchPublishers } from "../../store/publishers/publishersSlice";

import {
  Header as PublishersHeader,
  List as PublishersList,
  Manage as PublishersManage,
} from "../../components/publishers";

const Publishers = () => {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const { publishers, status } = useAppSelector((state) => state.publishers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPublishers());
    }
  }, [status, dispatch]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <PublishersHeader handleShow={handleShow}/>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <PublishersList data={publishers} />
        </Col>
      </Row>
      <PublishersManage
        data={{
          title: 'Create a publisher',
          showModal: showModal,
          handleClose: handleClose,
        }}
      />
    </>
  );
};

export default Publishers;
