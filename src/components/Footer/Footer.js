/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import { Box } from "@material-ui/core";

// @material-ui/icons
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import TelegramIcon from "@material-ui/icons/Telegram";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import { useTranslation } from "react-i18next";
import { Chat } from "@material-ui/icons";

const useStyles = makeStyles(styles);
const useMainStyles = makeStyles({
  main: {
    backgroundColor: "#363839",
    color: "#fff",
    position: "relative",
    zIndex: "3",
    padding: "1em"
  },
  mainRaised: {
    margin: "30px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
});
const useFooterStyles = makeStyles({
  subSectionTitle: {
    paddingLeft: "15px",
    paddingRight: "15px"
  }
});

export default function Footer(props) {
  const classes = useStyles();
  const classesMain = useMainStyles();
  const classesFooter = useFooterStyles();
  const { t } = useTranslation();

  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  const guideTopics = require("../../assets/text").presentations.topics;
  const topicsKeys = Object.keys(guideTopics);
  const topicsLength = topicsKeys.length;
  const middle = topicsLength / 2;
  const topicsStart = topicsKeys.slice(0, middle);
  const topicsEnd = topicsKeys.slice(middle, topicsLength);

  return (
    <>
      <footer className={classNames(classesMain.main, classesMain.mainRaised)}>
        <GridContainer
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <GridItem xs={12} sm={6} md={8}>
            <h6
              className={classesFooter.subSectionTitle}
              style={{ height: "5%" }}
            >
              {" "}
              {"Guide"}{" "}
            </h6>
            <Box sx={{ height: "85%", borderRight: "1px solid #8c8989" }}>
              <GridContainer style={{ margin: "0px" }}>
                <GridItem xs={12} sm={12} md={6} style={{ padding: "0px" }}>
                  <List dense={true}>
                    {topicsStart.map((key) => {
                      return (
                        <ListItem key={key}>
                          <Link to={""} style={{ color: "#bfbfbf" }}>
                            <ListItemText primary={t(guideTopics[key])} />
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} style={{ padding: "0px" }}>
                  <List dense={true}>
                    {topicsEnd.map((key) => {
                      return (
                        <ListItem key={key}>
                          <Link to={""} style={{ color: "#bfbfbf" }}>
                            <ListItemText primary={t(guideTopics[key])} />
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </GridItem>
              </GridContainer>
            </Box>
          </GridItem>
          {/*<GridItem xs={12} sm={12} md={2}>*/}
          {/*  <h6 className={classesFooter.subSectionTitle}*/}
          {/*      style={{height: "5%"}}> {"Site Map"} </h6>*/}
          {/*  <Box css={{height: "85%", borderRight: "1px solid #8c8989"}}>*/}
          {/*    <List dense={true}>*/}
          {/*      {topicsStart.map(([title, link]) => {*/}
          {/*        console.log(title, link);*/}
          {/*        return <ListItem>*/}
          {/*          <Link to={link} style={{color: "#bfbfbf"}}>*/}
          {/*            <ListItemText primary={title}/>*/}
          {/*          </Link>*/}
          {/*        </ListItem>*/}
          {/*      })}*/}
          {/*    </List>*/}
          {/*  </Box>*/}
          {/*</GridItem>*/}
          <GridItem xs={12} sm={6} md={4}>
            <h6
              className={classesFooter.subSectionTitle}
              style={{ height: "5%" }}
            >
              {" "}
              {"Contact"}{" "}
            </h6>
            <Box sx={{ height: "85%" }}>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <WhatsAppIcon style={{ color: "#bfbfbf" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link to={""} style={{ color: "#bfbfbf" }}>
                        {"201-662-7954"}{" "}
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon color={"#bfbfbf"}>
                    <EmailIcon style={{ color: "#bfbfbf" }} tooltip={"hola"} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <a
                        href={"mailto:info@diabetesteachingguide.com"}
                        style={{ color: "#bfbfbf", maxWidth: "100%" }}
                      >
                        <div style={{ overFlow: "wrap" }}>
                          <span style={{ display: "inlineBlock" }}>
                            {"info"}
                          </span>
                          <span>{"diabetesteachingguide.com"}</span>{" "}
                        </div>{" "}
                      </a>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Chat style={{ color: "#bfbfbf" }} tooltip={t("Forum")} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link to={"/chat"} style={{ color: "#bfbfbf" }}>
                        <ListItemText primary={t("Forum")} />
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </GridItem>
        </GridContainer>
      </footer>

      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <a href="#" className={aClasses} target="" underline="none">
              DiabetesTeachingGuide.com
            </a>
            {" -The Healthy Diabetic, LLC- "}
            <a href="mailto:info@diabetesteachingguide.com" underline="none">
              info@diabetesteachingguide.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
