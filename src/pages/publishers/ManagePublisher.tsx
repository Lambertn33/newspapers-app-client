import { Col, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";

const ManagePublisher = () => {
  const breadcrumbs: BreadCrumbInterface[] = [
    {
      label: "Publishers List",
      url: "/publishers",
      isActive: false,
    },
    {
      label: "Manage",
      url: "/publishers/manage",
      isActive: true,
    },
  ];
  return (
    <Row>
      <BreadCrumb breadcrumbs={breadcrumbs} />
    </Row>
  );
}

export default ManagePublisher