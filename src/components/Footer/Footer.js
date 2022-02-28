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
import { Typography } from "@material-ui/core";

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
import SiteMap from "./SiteMap";
import {siteRoutes} from "../../siteRoutes";

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
    paddingRight: "15px",
    fontSize: "17.5px"
  },
  li: {
    padding: "0px",

  },
  liText: {
    // marginTop: "0px",
    // marginBottom: "0px",
    fontSize: "0.6rem"
  }
});

export default function Footer(props) {
  const classes = useStyles();
  const classesMain = useMainStyles();
  const classesFooter = useFooterStyles();
  const {t} = useTranslation();

  const {whiteFont} = props;
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

  const footerTitles = require("../../assets/text").footer;
  const icss = {color: "#bfbfbf", fontSize: "1rem"};
  const tcss = {color: "#bfbfbf", fontSize: "0.6rem"};
  const contacts = [
    {
      icon: <WhatsAppIcon style={icss}/>,
      text: <Link to={siteRoutes.index} style={tcss}>{"201-662-7954"}</Link>,
    },
    {
      icon: <Chat style={icss}/>,
      text: <Link to={siteRoutes.chat} style={tcss}> {t("Forum")}</Link>
    },
    {
      icon: <EmailIcon style={icss}/>,
      text: <a href={"mailto:info@diabetesteachingguide.com"} style={tcss}>
        {"info@diabetesteachingguide.com"}
      </a>
    }
  ];

  return (
    <>
      <footer className={classNames(classesMain.main, classesMain.mainRaised)}>
        <GridContainer spacing={4}
                       direction="row"
                       justifyContent="space-between"
                       alignItems="stretch"
        >
          <GridItem xs={12} sm={12} md={5}>
            <Typography variant={"subtitle2"} component={"p"} className={classesFooter.subSectionTitle}>
              {t(footerTitles.guide)}
            </Typography>

            <GridContainer  style={{margin: "0px", borderTop: "1px solid #8c8989"}}>
              <GridItem xs={12} sm={6} style={{paddingLeft: "0px"}}>
                <List dense={true}>
                  {topicsStart.map((key) => {
                    return (
                      <ListItem key={key} className={classesFooter.li}>
                        <Link to={`${siteRoutes.guide}/${key}/`} style={{color: "#bfbfbf"}}>
                          <ListItemText primary={t(guideTopics[key])}
                                        primaryTypographyProps={{style:{fontSize: "0.6rem"}}}/>
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </GridItem>
              <GridItem xs={12} sm={6} style={{padding: "0px"}}>
                <List dense={true}>
                  {topicsEnd.map((key) => {
                    return (
                      <ListItem key={key} className={classesFooter.li}>
                        <Link to={`${siteRoutes.guide}/${key}`} style={{color: "#bfbfbf"}}>
                          <ListItemText primary={t(guideTopics[key])}
                                        primaryTypographyProps={{style:{fontSize: "0.6rem"}}}
                          />
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </GridItem>
            </GridContainer>

          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <Typography variant={"subtitle2"} component={"p"} className={classesFooter.subSectionTitle}>
              {t(footerTitles.sitemap)}
            </Typography>
            <SiteMap/>
          </GridItem>

          <GridItem xs={12} sm={6} md={4}>
            <Typography variant={"subtitle2"} component={"p"} className={classesFooter.subSectionTitle}>
              {t(footerTitles.contact)}
            </Typography>

            <List dense={true} style={{borderTop: "1px solid #8c8989"}}>
              {contacts.map((cnt, idx) => {
                return (
                  <ListItem key={"itm"+idx} className={classesFooter.li}>
                    <ListItemIcon style={{minWidth: "30px"}}> {cnt.icon} </ListItemIcon>
                    <ListItemText primary={cnt.text} style={{margin: "0px"}} />
                  </ListItem>
                );
              })}
            </List>
          </GridItem>
        </GridContainer>
      </footer>

      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <a href={siteRoutes.index} className={aClasses} target="" >
              <Typography component={"span"} color={"primary"} style={{fontSize: ".85rem"}} >
                {"DiabetesTeachingGuide.com "}
              </Typography>
            </a>
            <Typography component={"span"} color={"textPrimary"} style={{fontSize: ".85rem"}}>
              {"| The Healthy Diabetic, LLC _ 201-662-7954 |"}
            </Typography>
            <a href="mailto:info@diabetesteachingguide.com" >
              <Typography component={"span"} color={"primary"} style={{fontSize: ".85rem"}}>
                {" info@diabetesteachingguide.com "}</Typography>
            </a>
            <Link to={siteRoutes.terms} >
              <Typography component={"span"} color={"primary"} style={{fontSize: ".85rem"}}>
                {"| " + t(footerTitles.termsConditions)}
              </Typography>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
