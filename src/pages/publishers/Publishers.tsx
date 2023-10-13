import { Col, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";

const Publishers = () => {
  const breadcrumbs: BreadCrumbInterface[] = [
    {
      label: "Publishers List",
      url: "/publishers",
      isActive: true,
    },
    {
      label: "Manage",
      url: "/publishers/manage",
      isActive: false,
    },
  ];
  return (
    <Row>
      <BreadCrumb breadcrumbs={breadcrumbs}/>
    </Row>
  );
}

export default Publishers