import { Col, Row } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchNewsPapers } from "../../store/newspapers/newspapersSlice";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";
import { useEffect } from "react";

const NewsPapers = () => {
  const dispatch = useAppDispatch();
  const { newspapers, status } = useAppSelector((state) => state.newspapers);
 useEffect(() => {
  if (status === "idle") {
    dispatch(fetchNewsPapers());
  }
 }, [status, dispatch])

  
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
      {
        newspapers.map((newsPaper) => (
          <h2>{newsPaper.title}</h2>
        ))
      }
    </Row>
  );
};

export default NewsPapers;
