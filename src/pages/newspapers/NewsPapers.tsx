import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../store/store";
import {
  fetchNewsPapers,
  removeNewsPaper,
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

import Spinner from "../../components/spinner/Spinner";

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

  // delete newspaper
  const deleteNewsPaper = async (id: number) => {
    const response = await dispatch(removeNewsPaper(id));
    const { meta } = response;
    if (meta.requestStatus === "fulfilled") {
      dispatch(newspapersActions.eraseNewsPaper({ id }));
    }
  };

  return (
    <>
      <NewsPapersHeader handleShow={handleShow} />
      {newsPapersStatus === "idle" || publishersStatus === "idle" ? (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        <Row>
          {newspapers.length > 0 ? (
            <Col>
              <NewsPapersList
                data={newspapers}
                deleteNewsPaper={deleteNewsPaper}
              />
            </Col>
          ) : (
            <Col md={{ span: 6, offset: 3 }}>
              <Alert key="danger" variant="danger">
                No Newspapers found... please create one
              </Alert>
            </Col>
          )}
        </Row>
      )}
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
