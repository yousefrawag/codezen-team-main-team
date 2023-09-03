import React from "react";
import "./BreadCrumb.scss";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-item">
          <Link className="dir-m bages_links" to="/">
            home
          </Link>{" "}
          / {title}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
