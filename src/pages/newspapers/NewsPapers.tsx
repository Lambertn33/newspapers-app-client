import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchNewsPapers } from "../../store/newspapers/newspapersSlice";

import { Header as NewsPapersHeader } from "../../components/newspapers/Header";
import { List as NewsPapersList } from "../../components/newspapers/List";

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
        <NewsPapersHeader />
      </Row>
      <Row>
        <Col>
          <NewsPapersList data={newspapers} />
        </Col>
      </Row>
    </>
  );
};

export default NewsPapers;
