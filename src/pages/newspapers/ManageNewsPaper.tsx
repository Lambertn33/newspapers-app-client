import { Col, Row } from "react-bootstrap";

import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";

const ManageNewsPaper = () => {
  const breadcrumbs: BreadCrumbInterface[] = [
    {
      label: "NewsPapers List",
      url: "/newspapers",
      isActive: false,
    },
    {
      label: "Manage",
      url: "/newspapers/manage",
      isActive: true,
    },
  ];
  return (
    <Row>
      <BreadCrumb breadcrumbs={breadcrumbs} />
    </Row>
  );
};

export default ManageNewsPaper;
