import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../store/store";
import {
  fetchNewsPapers,
  createNewsPaper,
  newspapersActions,
  INewsPaper,
} from "../../store/newspapers/newspapersSlice";
import { fetchPublishers } from "../../store/publishers/publishersSlice";

import {
  Header as NewsPapersHeader,
  List as NewsPapersList,
  Manage as NewsPapersManage,
} from "../../components/newspapers";

const NewsPapers = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const { newspapers, status: newsPapersStatus } = useAppSelector(
    (state) => state.newspapers
  );
  const { publishers, status: publishersStatus } = useAppSelector(
    (state) => state.publishers
  );

  useEffect(() => {
    if (publishersStatus === "idle") {
      dispatch(fetchPublishers());
    }
    if (newsPapersStatus === "idle") {
      dispatch(fetchNewsPapers());
    }
  }, [newsPapersStatus, publishersStatus, dispatch]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // create newspaper
  const createNewsPaperHandler = async (data: any) => {
    const newNewsPaper = {
      title: data.newspaperTitle,
      link: data.newspaperLink,
      abstract: data.newspaperAbstract,
      publisherId: data.newspaperPublisher.id,
      file: data.newspaperImage,
      creationDate: data.newspaperCreationDate,
    };

    const response = await dispatch(createNewsPaper(newNewsPaper));

    if (response.meta.requestStatus === "fulfilled") {
      const { payload } = response;
      const createdNewsPaper: INewsPaper = {
        id: payload.newNewsPaper.id,
        creationDate: payload.newNewsPaper.creationDate,
        image: payload.newNewsPaper.image,
        publisher: {
          names: data.newspaperPublisher.names,
        },
        title: payload.newNewsPaper.title,
      };
      dispatch(newspapersActions.appendNewsPaper(createdNewsPaper));
    }
    setShowModal(false);
  };

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
        onCreateNewsPaper={createNewsPaperHandler}
        data={{
          title: "Create a newspaper",
          publishers: publishers,
          showModal: showModal,
          handleClose: handleClose,
        }}
      />
    </>
  );
};

export default NewsPapers;
