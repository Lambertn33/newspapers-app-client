import { FC } from "react";
import { Col, Row, Card } from "react-bootstrap";

import { IBreadCrumb } from "../../interfaces/IBreadcrumb";
import { IPublisherDetails } from "../../interfaces/IPublisherDetails";

import BreadCrumb from "../breadcrumb/BreadCrumb";
import { formatDate } from "../../util/date";

export const Header: FC<{
 publisher: IPublisherDetails
}> = ({ publisher}) => {

  const breadcrumbs: IBreadCrumb[] = [
    {
      label: "Publishers List",
      url: "/publishers",
      isActive: false,
    },
    {
      label: `${publisher?.names}`,
      url: `/publishers/${publisher?.id}`,
      isActive: true,
    },
  ];

  return (
    <Row>
      <Col md={6}>
        <BreadCrumb breadcrumbs={breadcrumbs} />
      </Col>
      <Card>
        <Card.Body>
          <h3>{publisher?.names}</h3>
          <p>Joined on {formatDate(publisher?.joinedDate)}</p>
          <p><b>{publisher?.newsPapers.length ? `${publisher?.names} has ${publisher?.newsPapers.length} published newspapers` : `${publisher?.names} has no newspapers yet`}</b></p>
        </Card.Body>
      </Card>
    </Row>
  );
};
