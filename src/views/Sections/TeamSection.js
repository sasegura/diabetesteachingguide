import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

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
        <Typography variant={"h5"} className={classes.title}>{t(teamSection.title)}</Typography>
      </GridItem>

      <GridItem container xs={12} sm={12} md={10} style={{padding: "0px"}}
                direction="row"
                justifyContent="space-between"
                alignItems="center" >
        <GridItem xs={12} sm={8}>
            <Typography align={"justify"} className={classes.description}>
              {t(teamSection.message)}
            </Typography>
        </GridItem>

        <GridItem container xs={12} sm={4}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.itemGrid}
        >
          <GridItem>
            <img src={albert}
               style={{maxWidth: "100%"}}
               alt="..."
               className={imageClasses}/>
          </GridItem>
          <GridItem>
            <Typography   className={classes.cardTitle}>
            {teamSection.founder}
            <br/>
            <Typography variant={"subtitle2"} component={"small"} className={classes.smallTitle}>{t(owner)}</Typography>
          </Typography>
          </GridItem>
        </GridItem>
      </GridItem>
    </GridContainer>
    // </div>
  );
}

export default withTranslation("translations")(TeamSection);
