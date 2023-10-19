import { FC } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { IBreadCrumb } from "../../interfaces/IBreadcrumb";
import BreadCrumb from "../breadcrumb/BreadCrumb";

export const Header: FC<{ handleShow: () => void }> = ({ handleShow }) => {
  const breadcrumbs: IBreadCrumb[] = [
    {
      label: "Publishers List",
      url: "/publishers",
      isActive: true,
    },
  ];
  return (
    <Row>
      <Col md={6}>
        <BreadCrumb breadcrumbs={breadcrumbs} />
      </Col>
      <Col md={6} className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleShow} className="btn-sm">
          Add Publisher
        </Button>
      </Col>
    </Row>
  );
};
