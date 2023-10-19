import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { IBreadCrumb } from "../../interfaces/IBreadcrumb";

import styles from "./BreadCrumb.module.css";

const BreadCrumb: React.FC<{ breadcrumbs: IBreadCrumb[] }> = ({
  breadcrumbs,
}) => {
  return (
    <Breadcrumb className={styles.item}>
      {breadcrumbs.map((breadcrumb, key) => (
        <Breadcrumb.Item key={key}>
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
