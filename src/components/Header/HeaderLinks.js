/*eslint-disable*/
import React from "react";
import {useTranslation} from "react-i18next";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

// @material-ui/icons
import IconTranslateOutlined from "@material-ui/icons/TranslateOutlined";
import IconInfoOutlined from "@material-ui/icons/InfoOutlined";
import IconHelpOutline from "@material-ui/icons/HelpOutline";
import IconPersonOutlineOutlined from "@material-ui/icons/PersonOutlineOutlined";
import IconShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import IconList from "@material-ui/icons/List";
import IconAccountCircle from "@material-ui/icons/AccountCircle"

// mdi-material-ui icons
import Login from "mdi-material-ui/Login"
import Logout from "mdi-material-ui/Logout"
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const {t, i18n} = useTranslation();

  return ( // TODO remove commented code
    <List className={classes.list}>

      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button*/}
      {/*    href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"*/}
      {/*    color="transparent"*/}
      {/*    target="_blank"*/}
      {/*    className={classes.navLink}*/}
      {/*  >*/}
      {/*    <CloudDownload className={classes.icons} /> Download*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={t("Guide")}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          hoverColor={"info"}
          buttonIcon={IconList}

          dropdownList={[  // TODO generar la lista con un ciclo
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideIntro")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideNutrition")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideActivity")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideWeight")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideGlucose")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideMedication")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideComplications")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideSickDays")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideLiving")}/>
              </Link>
            </ListItem>,
            <ListItem >
              <Link to="/" className={classes.dropdownLink} style={{padding: "0px"}}>
                <ListItemText primary={t("GuideInsulin")}/>
              </Link>
            </ListItem>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/about-us" className={classes.navLink}>
          <IconHelpOutline className={classes.icons}/>
          {t("FAQ")}
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/about-us" className={classes.navLink}>
          <IconInfoOutlined className={classes.icons}/>
          {t("About")}
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*<Tooltip id={"Language"}*/}
        {/*         title={t("Language")}*/}
        {/*         placement={window.innerWidth > 959 ? "top" : "left"}*/}
        {/*         classes={{tooltip: classes.tooltip}}>*/}
          <div>
            <CustomDropdown
              noLiPadding
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              hoverColor={"info"}
              buttonIcon={IconTranslateOutlined}
              dropdownList={[
                <ListItem>
                  <ListItemText
                    primary={"Español"}
                    onClick={() => {i18n.changeLanguage("es")} }
                  />
                </ListItem>,
                <ListItem>
                  <ListItemText
                    primary={"English"}
                    onClick={() => {i18n.changeLanguage("en")} }
                  />
                </ListItem>
              ]}
            />
        </div>
        {/*</Tooltip>*/}
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*<Tooltip id={"User"}*/}
        {/*         title={t("User")}*/}
        {/*         placement={window.innerWidth > 959 ? "top" : "left"}*/}
        {/*         // classes={{tooltip: classes.tooltip}}*/}
        {/*>*/}
          <div>
            <CustomDropdown
              noLiPadding
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              hoverColor={"info"}
              buttonIcon={IconPersonOutlineOutlined}
              dropdownList={[
                <ListItem>
                  <ListItemIcon>
                    <IconAccountCircle />
                  </ListItemIcon>
                  <ListItemText primary={t("Login")} />
                </ListItem>,
                <Divider />,
                <ListItem>
                  <ListItemIcon>
                    <Login />
                  </ListItemIcon>
                  <ListItemText primary={t("Login")} />
                </ListItem>,
                <ListItem>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary={t("Logout")} />
                </ListItem>,
                <Divider/>,
                <ListItem>
                  <ListItemIcon>
                    <IconShoppingCartOutlined />
                  </ListItemIcon>
                  <ListItemText primary={t("ShopCart")} />
                </ListItem>
              ]}
            />
        </div>
        {/*</Tooltip>*/}
      </ListItem>
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Tooltip*/}
      {/*    id="instagram-twitter"*/}
      {/*    title="Follow us on twitter"*/}
      {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
      {/*    classes={{ tooltip: classes.tooltip }}*/}
      {/*  >*/}
      {/*    <Button*/}
      {/*      href="https://twitter.com/CreativeTim?ref=creativetim"*/}
      {/*      target="_blank"*/}
      {/*      color="transparent"*/}
      {/*      className={classes.navLink}*/}
      {/*    >*/}
      {/*      <i className={classes.socialIcons + " fab fa-twitter"} />*/}
      {/*    </Button>*/}
      {/*  </Tooltip>*/}
      {/*</ListItem>*/}

      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Tooltip*/}
      {/*    id="instagram-facebook"*/}
      {/*    title="Follow us on facebook"*/}
      {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
      {/*    classes={{ tooltip: classes.tooltip }}*/}
      {/*  >*/}
      {/*    <Button*/}
      {/*      color="transparent"*/}
      {/*      href="https://www.facebook.com/CreativeTim?ref=creativetim"*/}
      {/*      target="_blank"*/}
      {/*      className={classes.navLink}*/}
      {/*    >*/}
      {/*      <i className={classes.socialIcons + " fab fa-facebook"} />*/}
      {/*    </Button>*/}
      {/*  </Tooltip>*/}
      {/*</ListItem>*/}
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Tooltip*/}
      {/*    id="instagram-tooltip"*/}
      {/*    title="Follow us on instagram"*/}
      {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
      {/*    classes={{ tooltip: classes.tooltip }}*/}
      {/*  >*/}
      {/*    <Button*/}
      {/*      color="transparent"*/}
      {/*      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"*/}
      {/*      target="_blank"*/}
      {/*      className={classes.navLink}*/}
      {/*    >*/}
      {/*      <i className={classes.socialIcons + " fab fa-instagram"} />*/}
      {/*    </Button>*/}
      {/*  </Tooltip>*/}
      {/*</ListItem>*/}
    </List>
  );
}
