import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";
import BreadCrumb from "../breadcrumb/BreadCrumb";

export const Header = () => {
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
  return <BreadCrumb breadcrumbs={breadcrumbs} />;
};
