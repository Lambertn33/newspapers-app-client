import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../store/store";
import {
  fetchPublishers,
  createPublisher,
  removePublisher,
  publishersActions,
} from "../../store/publishers/publishersSlice";

import {
  Header as PublishersHeader,
  List as PublishersList,
  Manage as PublishersManage,
} from "../../components/publishers";

const Publishers = () => {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const { publishers, status } = useAppSelector((state) => state.publishers);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPublishers());
    }
  }, [status, dispatch]);

  // create new publisher
  const createPublisherHandler = async (data: any) => {
    const response = await dispatch(createPublisher(data));
    const { meta, payload } = response;

    if (meta.requestStatus === "fulfilled") {
      const { newPublisher } = payload;
      const createdPublisher = {
        id: newPublisher.id,
        names: newPublisher.names,
        joinedDate: newPublisher.joinedDate,
        _count: {
          newsPapers: 0,
        },
      };
      dispatch(publishersActions.appendPublisher(createdPublisher));
      setShowModal(false);
    }
  };

  const deletePublisher = async (id: number) => {
    const response = await dispatch(removePublisher(id));
    const { meta } = response;
    if (meta.requestStatus === "fulfilled") {
      dispatch(publishersActions.erasePublisher({ id }));
    }
  };

  return (
    <>
      <PublishersHeader handleShow={handleShow} />
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <PublishersList data={publishers} deletePublisher={deletePublisher} />
        </Col>
      </Row>
      <PublishersManage
        data={{
          title: "Create a publisher",
          showModal: showModal,
          handleClose: handleClose,
        }}
        onCreatePublisher={createPublisherHandler}
      />
    </>
  );
};

export default Publishers;
