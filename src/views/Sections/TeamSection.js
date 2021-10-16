import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import albert from "assets/img/albert.jpg";
import { teamSection, owner } from "assets/text";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

TeamSection.propTypes = {
  t: PropTypes.func
};

function TeamSection(props) {
  const { t } = props;
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    // classes.imgFluid
  );
  return (

    <GridContainer justify="center"> {/*<div className={classes.container}>*/}
      <GridItem xs={12} sm={12} md={10}>
        <h3 className={classes.title}>{t(teamSection.messageTitle)}</h3>
      </GridItem>

      <GridItem container xs={12} sm={12} md={10} style={{padding: "0px"}}
                direction="row"
                justifyContent="space-between"
                alignItems="center" >
        <GridItem xs={12} sm={8}>
            <p className={classes.description}>
              {t(teamSection.message)}
            </p>
        </GridItem>

        <GridItem container xs={12} sm={4}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.itemGrid}
        >
          <img src={albert}
               style={{maxWidth: "60%"}}
               alt="..."
               className={imageClasses}/>
          <h4 className={classes.cardTitle}>
            {teamSection.albertAguero}
            <br/>
            <small className={classes.smallTitle}>{t(owner)}</small>
          </h4>
        </GridItem>
      </GridItem>
    </GridContainer>
    // </div>
  );
}

export default withTranslation("translations")(TeamSection);
