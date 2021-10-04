/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import {Box} from "@material-ui/core";

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
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
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

  const {whiteFont} = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  const guide_topics = [
    ["Introduction to Diabetes", "/"],
    ["Nutrition and Carbohydrate Counting", "/"],
    ["Physical Activity", "/"],
    ["Weight Management", "/"],
    ["Blood Glucose Monitoring", "/"],
    ["Medication Management", "/"],
    ["Complications of Uncontrolled Diabetes", "/"],
    ["Managing Sick Days", "/"],
    ["Living with Diabetes", "/"],
    ["Insulin", "/"]
  ];
  const middle = guide_topics.length / 2;
  const guideStart = guide_topics.slice(0, middle);
  const guideEnd = guide_topics.slice(middle, guide_topics.length);

  return (
    <>
      <footer className={classNames(classesMain.main, classesMain.mainRaised)}>
        <GridContainer spacing={1}
                       direction="row"
                       justifyContent="space-between"
                       alignItems="stretch"
        >
          <GridItem xs={12} sm={12} md={5}>
            <h6 className={classesFooter.subSectionTitle}
                style={{height: "5%"}}
            > {"Guide"} </h6>
            <Box css={{height: "85%", borderRight: "1px solid #8c8989"}}>
              <GridContainer style={{margin: "0px"}}>
                <GridItem xs={12} sm={12} md={6} style={{padding: "0px"}}>
                  <List dense={true}>
                    {guideStart.map(([title, link]) => {
                      return <ListItem>
                        <Link to={link} style={{color: "#bfbfbf"}}>
                          <ListItemText primary={title}/>
                        </Link>
                      </ListItem>
                    })}
                  </List>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} style={{padding: "0px"}}>
                  <List dense={true}>
                    {guideEnd.map(([title, link]) => {
                      return <ListItem>
                        <Link to={link} style={{color: "#bfbfbf"}}>
                          <ListItemText primary={title}/>
                        </Link>
                      </ListItem>
                    })}
                  </List>
                </GridItem>
              </GridContainer>
            </Box>

          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <h6 className={classesFooter.subSectionTitle}
                style={{height: "5%"}}> {"Site Map"} </h6>
            <Box css={{height: "85%", borderRight: "1px solid #8c8989"}}>
              <List dense={true}>
                {guideStart.map(([title, link]) => {
                  console.log(title, link);
                  return <ListItem>
                    <Link to={link} style={{color: "#bfbfbf"}}>
                      <ListItemText primary={title}/>
                    </Link>
                  </ListItem>
                })}
              </List>
            </Box>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <h6 className={classesFooter.subSectionTitle}
                style={{height: "5%"}}> {"Contact"} </h6>
            <Box css={{height: "85%",}}>
              <List dense={true}>
                {guideEnd.map(([title, link]) => {
                  return <ListItem>
                    <Link to={link} style={{color: "#bfbfbf"}}>
                      <ListItemText color={"info"} primary={title}/>
                    </Link>
                  </ListItem>
                })}
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
            {" -The Healthy Diabetic, LLC - 201-662-7954- "}
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
  whiteFont: PropTypes.bool,
};
