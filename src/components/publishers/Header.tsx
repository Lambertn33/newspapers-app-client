import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";
import BreadCrumb from "../breadcrumb/BreadCrumb";

export const Header = () => {
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
  return <BreadCrumb breadcrumbs={breadcrumbs} />;
};
