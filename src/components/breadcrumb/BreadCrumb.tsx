import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { BreadCrumbInterface } from "../../interfaces/Breadcrumb";

import styles from "./BreadCrumb.module.css";

const BreadCrumb: React.FC<{ breadcrumbs: BreadCrumbInterface[] }> = ({
  breadcrumbs,
}) => {
  return (
    <Breadcrumb className={styles.item}>
      {breadcrumbs.map((breadcrumb) => (
        <Breadcrumb.Item>
          <Link
            className={breadcrumb.isActive ? styles.active : ""}
            to={breadcrumb.url}
          >
            {breadcrumb.label}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
