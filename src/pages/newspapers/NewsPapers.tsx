import { Col, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";

const NewsPapers = () => {
  const breadcrumbs: BreadCrumbInterface[] = [
    {
      label: "NewsPapers List",
      url: "/newspapers",
      isActive: true,
    },
    {
      label: "Manage",
      url: "/newspapers/manage",
      isActive: false,
    },
  ];
  return (
    <Row>
      <BreadCrumb breadcrumbs={breadcrumbs}/>
    </Row>
  );
};

export default NewsPapers;
