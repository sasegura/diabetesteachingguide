import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import {siteRoutes} from "../../siteRoutes";
const useStyles = makeStyles(styles);

export const HeaderBrand = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={siteRoutes.index} className={props.className}>
          <img
            src={
              require("../../assets/img/logo/Blue_circle_for_diabetes.svg")
                .default
            }
            alt=""
            width="40px"
          />
        </Link>
      </ListItem>
    </List>
  );
};

HeaderBrand.propTypes = {
  className: PropTypes.string
};
