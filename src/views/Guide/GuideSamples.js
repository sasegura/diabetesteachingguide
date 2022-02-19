import React from "react";

// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { useTranslation } from "react-i18next";
import GridContainer from "../../components/Grid/GridContainer";
// import { Hidden } from "@material-ui/core";
import GridItem from "../../components/Grid/GridItem";
import {useHistory, useLocation} from "react-router-dom"


// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../components/Card/Card";
import PropTypes from "prop-types";
import IconButton  from "@material-ui/core/IconButton";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import Button  from "../../components/CustomButtons/Button";
// import Header from "../../components/Header/Header";

const useStyles = makeStyles(styles);

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }),
// );

GuideSamples.propTypes = {
  guideTopics: PropTypes.object,
  topicsData: PropTypes.object
};

export default function GuideSamples(props) {
  const {guideTopics, topicsData} = props;
  // const guideTopics = require("../../assets/text").presentations.topics;
  const topicsKeys = Object.keys(guideTopics);
  const title = require("../../assets/text").guidePage.title;
  const [selectedKey, setSelectedKey] = React.useState(topicsKeys[0]);
  const {t, i18n} = useTranslation();
  const classes = useStyles();
  const historyNav = useHistory();
  const {pathname} = useLocation();


  let slider = null;
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    accessibility: true,
    adaptiveHeight: true
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: string,
  ) => {
    setSelectedKey(key);
  };

  const topicsList = <List component="nav" dense={true} >
      {topicsKeys.map((key) => {
        return <>
          <ListItem
            key={key}
            button
            selected={selectedKey === key}
            onClick={(event) => {handleListItemClick(event, key); historyNav.push(pathname+"#carousel")}}
            onMouseDown={()=>slider.slickGoTo(0)}
            style={{ borderRadius: "5px"}}
          >
            <ListItemText primary={<a href={"#carousel"}> {t(guideTopics[key])} </a>  } />  {/*todo eliminar el link*/}
          </ListItem>
        </>
      })}
    </List>;

  const carousel =
            <Card carousel>
              <Carousel ref={innerSlider => (slider = innerSlider)} {...carouselSettings}>
                {topicsData[guideTopics[selectedKey]][i18n.resolvedLanguage].map((image, index) => {
                  return <div key={"img"+index}>
                    <img src={image} alt={topicsList[selectedKey]} className={"slick-image"}/>
                  </div>
                })}
                {/*<div>*/}
                {/*  <img src={image1} alt="First slide" className="slick-image" />*/}
                {/*  /!*<div className="slick-caption">*!/*/}
                {/*  /!*  <h4>*!/*/}
                {/*  /!*    <LocationOn className="slick-icons" />*!/*/}
                {/*  /!*    Yellowstone National Park, United States*!/*/}
                {/*  /!*  </h4>*!/*/}
                {/*  /!*</div>*!/*/}
                {/*</div>*/}
              </Carousel>
            </Card>;

  return <>
    <GridContainer>
      <GridItem container xs={12} style={{padding: "0px", paddingTop: "1rem"}} justifyContent={"space-between"}>

        <GridItem xs={12} sm={10}>
          <Typography variant={"h5"}
                      className={"classes.title"}
                      align={"center"}
                      style={{display: "inline-block"}}>
              {t(title)}
            </Typography>
        </GridItem>
        <GridItem xs={12} sm={1}>
          <IconButton color="primary" aria-label="add to shopping cart"
                      style={{border: "dotted 1px"}}>
              <AddShoppingCartIcon/>
            </IconButton>
        </GridItem>

      </GridItem>
      <GridItem xs={12} sm={3} style={{padding: "0px"}}>

        {topicsList}

      </GridItem>
      {/*<Hidden implementation={"css"} >*/}
      {/*  <GridItem></GridItem>*/}
      {/*</Hidden>*/}
      <GridItem sm={1} style={{padding: "0px"}}>
        <Divider orientation="vertical"/>
      </GridItem>
      <GridItem xs={12} sm={8} className={classes.marginAuto} id={"carousel"}>
        {carousel}
      </GridItem>
    </GridContainer>
  </>;
}
