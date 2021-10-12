import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { messageSection } from "assets/text";
import { withTranslation } from "react-i18next";
import { PropTypes } from "prop-types";
const useStyles = makeStyles(styles);

MessageSection.propTypes = {
  t: PropTypes.func
};

function MessageSection(props) {
  const { t } = props;
  const classes = useStyles();
  return (
    <div>
      <GridContainer justifyContent="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>{t(messageSection.title)}</h2>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={t(messageSection.yourName)}
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={t(messageSection.yourEmail)}
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText={t(messageSection.yourMessage)}
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">{t(messageSection.sendMessage)}</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withTranslation("translations")(MessageSection);
