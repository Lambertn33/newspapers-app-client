import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import {IBreadCrumb } from "../../interfaces/IBreadcrumb";
import BreadCrumb from "../breadcrumb/BreadCrumb";
import { IPublisherDetails } from "../../interfaces/IPublisherDetails";

export const Header: FC<{ publisher: IPublisherDetails }> = ({ publisher }) => {
  const breadcrumbs: IBreadCrumb[] = [
    {
      label: "Publishers List",
      url: "/publishers",
      isActive: false,
    },
    {
      label: `${publisher.names}`,
      url: `/publishers/${publisher.id}`,
      isActive: false,
    },
  ];
  return (
    <Row>
      <Col md={6}>
        <BreadCrumb breadcrumbs={breadcrumbs} />
      </Col>
    </Row>
  );
};
