/*eslint-disable*/
import React from "react";
import { useTranslation } from "react-i18next";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";

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
import IconAccountCircle from "@material-ui/icons/AccountCircle";

// mdi-material-ui icons
import Login from "mdi-material-ui/Login";
import Logout from "mdi-material-ui/Logout";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useAuth0 } from "@auth0/auth0-react";
import {Gavel as GavelIcon} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const { loginWithRedirect, logout } = useAuth0();

  const guideTopics = require("../../assets/text").presentations.topics;
  const topicsKeys = Object.keys(guideTopics);

  const conditionsTitle = require("../../assets/text").termsAndConditions.sectionTitle;

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/guide" className={classes.navLink}>
          <IconList className={classes.icons} />
          {t("Guide")}
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/faq" className={classes.navLink}>
          <IconHelpOutline className={classes.icons} />
          {t("FAQ")}
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/about-us" className={classes.navLink}>
          <IconInfoOutlined className={classes.icons} />
          {t("About")}
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/terms-and-conditions" className={classes.navLink}>
          <GavelIcon className={classes.icons}/>
          {t(conditionsTitle)}
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
                  onClick={() => {
                    i18n.changeLanguage("es");
                  }}
                />
              </ListItem>,
              <ListItem>
                <ListItemText
                  primary={"English"}
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
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
                <Link
                  to={"/profile-page"}
                  className={classes.dropdownLink}
                  style={{ padding: "0px" }}
                >
                  <ListItemText primary={t("User")} />
                </Link>
              </ListItem>,
              <Divider />,
              <ListItem>
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <Link
                  to={"/profile-page"}
                  className={classes.dropdownLink}
                  style={{ padding: "0px" }}
                >
                  <ListItemText
                    primary={t("Login")}
                    onClick={() => {
                      loginWithRedirect();
                    }}
                  />
                </Link>
              </ListItem>,
              <ListItem>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <Link
                  to="/"
                  className={classes.dropdownLink}
                  style={{ padding: "0px" }}
                >
                  <ListItemText
                    primary={t("Logout")}
                    onClick={() => {
                      logout({ returnTo: window.location.origin });
                    }}
                  />
                </Link>
              </ListItem>,
              <Divider />,
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
