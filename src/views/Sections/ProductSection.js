import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

import PropTypes from "prop-types";
import {presentations, siteTitle} from "assets/text";
import {withTranslation} from "react-i18next";
import {Card, CardMedia, CardContent, CardActionArea} from "@material-ui/core";
// import Container from "@material-ui/core/Container";
import albert from "assets/img/albert.jpg";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardBody from "../../components/Card/CardBody";

ProductSection.propTypes = {
  t: PropTypes.func
};

function ProductSection(props) {
  const {t} = props;
  const classes = useStyles();
  const topics = Object.keys(presentations.topics);
  const topicsComponent = topics && topics.map((key) => {
    return (
      <GridItem key={key} xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardMedia component={"img"} alt={"..."} image={albert} height="140px" title={"albert"}/>
            <CardContent>
              <h5>
                {t(presentations.topics[key])}
              </h5>
            </CardContent>
          </CardActionArea>
        </Card>
      </GridItem>
    )
  });
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={10}>
        <h3 className={classes.title}>{t(siteTitle)}</h3>
        <p className={classes.description}>
          {t(presentations.explanation)}
        </p>
          <h5 className={classes.title}>{t(presentations.topicsIntro)}</h5>
          <GridContainer xs={12} spacing={3} style={{margin: "0px", paddingBottom: "20px"}}>
            {topicsComponent}
          </GridContainer>

        <p className={classes.description}>
          {t(presentations.explanation2)}
        </p>
        <p className={classes.description}>
          {t(presentations.explanation3)}
        </p>

        {/*<ul>The 10 part presentation includes:*/}
        {/*  <li>Introduction to Diabetes</li>*/}
        {/*  <li>Nutrition and Carbohydrate Counting</li>*/}
        {/*  <li>Physical Activity</li>*/}
        {/*  <li>Weight Management</li>*/}
        {/*  <li>Blood Glucose Monitoring</li>*/}
        {/*  <li>Complications of Uncontrolled Diabetes</li>*/}
        {/*  <li>Managing Sick Days</li>*/}
        {/*  <li>Living with Diabetes</li>*/}
        {/*  <li>Insulin</li>*/}
        {/*  <li></li>*/}
        {/*</ul>*/}

      </GridItem>
    </GridContainer>

  );
}

export default withTranslation("translations")(ProductSection);
