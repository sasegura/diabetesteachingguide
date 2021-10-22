import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
// import Typography from "@material-ui/core/Typography";
// import { Link } from "react-router-dom";

import {
  Home as HomeIcon,
  List as ListIcon,
  InfoOutlined as InfoIcon,
  HelpOutline as HelpIcon,
  Subject as SubjectIcon
} from "@material-ui/icons";
import { useTranslation } from "react-i18next";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
      paddingRight: "0px",
      paddingTop: "0px",
      paddingBottom: "0px"
    },
    li: {
      padding: "0px",
    },
  }),
);

export default function SiteMap() {
  const classes = useStyles();
  const {t} = useTranslation();
  const texts = require("../../assets/text").footer;

  const icss = {color: "#bfbfbf", fontSize: "1rem"};
  const tcss = {color: "#bfbfbf", fontSize: "0.6rem"};
  const siteMap = [
    {
      icon: <HomeIcon style={icss}/>,
      text: t(texts.home),
    },
    {
      icon: <ListIcon style={icss}/>,
      text: t(texts.guide)
    },
    {
      icon: <SubjectIcon style={tcss}/>,
      text: [t(texts.t1), t(texts.t2), t(texts.tn)],
      nested: true
    },
    {
      icon: <HelpIcon style={icss}/>,
      text: t(texts.faq)
    },
    {
      icon: <InfoIcon style={icss}/>,
      text: t(texts.about)
    }
  ];

  const nestedItems = (icon, texts) => {
    return <List className={classes.li} >
      {texts.map((txt) => {
        return <ListItem key={txt} className={classes.nested}>
          <ListItemIcon style={{minWidth: "20px"}}>{icon}</ListItemIcon>
          <ListItemText primary={txt} style={{margin: "0px"}} primaryTypographyProps={{style: {...tcss}}}/>
        </ListItem>

      })}
    </List>
  };

  const primaryItem = (icon, text) => {
    return (
      <>
        <ListItemIcon style={{minWidth: "30px"}}> {icon} </ListItemIcon>
        <ListItemText primary={text} style={{margin: "0px"}} primaryTypographyProps={{style: {...tcss}}}/>
      </>
    );
  };
  return (
    <List dense={true} style={{borderTop: "1px solid #8c8989"}}>
      {siteMap.map((link, idx) => {
        return (
          <ListItem key={"itm" + idx} className={classes.li}>
            {link.nested ? nestedItems(link.icon, link.text) :
              primaryItem(link.icon, link.text)}
          </ListItem>
        );
      })}
    </List>
  );
}
