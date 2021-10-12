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
    classes.imgFluid
  );
  return (
    <div className={classes.container}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>{t(teamSection.messageTitle)}</h2>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Card plain>
                  <CardBody>
                    <p className={classes.description}>
                      {t(teamSection.message)}
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card plain margin={0}>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={albert} alt="..." className={imageClasses} />
                    <h4 className={classes.cardTitle}>
                      {teamSection.albertAguero}
                      <br />
                      <small className={classes.smallTitle}>{t(owner)}</small>
                    </h4>
                  </GridItem>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default withTranslation("translations")(TeamSection);
