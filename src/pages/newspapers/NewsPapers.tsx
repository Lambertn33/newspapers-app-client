import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchNewsPapers } from "../../store/newspapers/newspapersSlice";

import {
  Header as NewsPapersHeader,
  List as NewsPapersList,
  Manage as NewsPapersManage,
} from "../../components/newspapers";

const NewsPapers = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const { newspapers, status } = useAppSelector((state) => state.newspapers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewsPapers());
    }
  }, [status, dispatch]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Row>
        <NewsPapersHeader handleShow={handleShow} />
      </Row>
      <Row>
        <Col>
          <NewsPapersList data={newspapers} />
        </Col>
      </Row>
      <NewsPapersManage
        data={{
          title: "Create a newspaper",
          showModal: showModal,
          handleClose: handleClose,
        }}
      />
    </>
  );
};

export default NewsPapers;
