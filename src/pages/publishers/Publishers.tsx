import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../store/store";
import {
  fetchPublishers,
  createPublisher,
  removePublisher,
  updatePublisher,
  publishersActions,
} from "../../store/publishers/publishersSlice";

import {
  Header as PublishersHeader,
  List as PublishersList,
  Manage as PublishersManage,
} from "../../components/publishers";

import Spinner from "../../components/spinner/Spinner";
import { IPublisherInputs } from "../../interfaces/IPublisherInputs";

const Publishers = () => {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const [publisherToEdit, setPublisherToEdit] =
    useState<IPublisherInputs | null>(null);
    
  const { publishers, status } = useAppSelector((state) => state.publishers);
  const isEditing = publisherToEdit !== null;

  const handleClose = () => {
    setPublisherToEdit(null);
    setShowModal(false);
  };

  const handleShow = (publisher?: any) => {
    if (publisher) {
      setPublisherToEdit(publisher);
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPublishers());
    }
  }, [status, dispatch]);

  // create/ update publisher
  const managePublisherHandler = async (data: any) => {
    const response = isEditing
      ? await dispatch(updatePublisher(data))
      : await dispatch(createPublisher(data));

    if (response.meta.requestStatus === "fulfilled") {
      const { payload } = response;
      const publisherData = isEditing
        ? payload.updatedPublisher
        : payload.newPublisher;
      const { id, names, joinedDate } = publisherData;

      if (isEditing) {
        dispatch(publishersActions.changePublisher({ id, names, joinedDate }));
      } else {
        const createdPublisher = {
          id,
          names,
          joinedDate,
          _count: {
            newsPapers: 0,
          },
        };
        dispatch(publishersActions.appendPublisher(createdPublisher));
      }

      setShowModal(false);
    }
  };

  // delete publisher
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
      {status === "idle" ? (
        <div className="d-flex justify-content-center">
          <Spinner />
          </div>
      ) : (
        <Row>
          {publishers.length > 0 ? (
            <Col md={{ span: 10, offset: 1 }}>
              <PublishersList
                data={publishers}
                deletePublisher={deletePublisher}
                handleShow={handleShow}
              />
            </Col>
          ) : (
            <Col md={{ span: 6, offset: 3 }}>
              <Alert key="danger" variant="danger">
                No Publishers found... please create one
              </Alert>
            </Col>
          )}
        </Row>
      )}
      <PublishersManage
        data={{
          title:
            publisherToEdit === null
              ? "Create a publisher"
              : "Update a publisher",
          showModal: showModal,
          handleClose: handleClose,
          isEditing: isEditing,
          publisherToEdit: publisherToEdit,
        }}
        onManagePublisher={managePublisherHandler}
      />
    </>
  );
};

export default Publishers;
