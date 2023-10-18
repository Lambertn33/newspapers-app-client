import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";
import BreadCrumb from "../breadcrumb/BreadCrumb";

export const Header = () => {
  const breadcrumbs: BreadCrumbInterface[] = [
    {
      label: "NewsPapers List",
      url: "/newspapers",
      isActive: true,
    },
  ];
  return <BreadCrumb breadcrumbs={breadcrumbs} />;
};
