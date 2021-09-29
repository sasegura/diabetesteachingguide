import {Link} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";


export const HeaderBrand = (props) => {
    return <Link to={"/"} className={props.className}>
              <img src={require("../../assets/img/logo/Blue_circle_for_diabetes.svg").default} width="40px"/>
          </Link>;
};

HeaderBrand.propTypes = {
    className: PropTypes.string,
};