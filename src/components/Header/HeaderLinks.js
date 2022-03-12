/*eslint-disable*/
import React from "react";
import {useTranslation} from "react-i18next";
import ListItemText from "@material-ui/core/ListItemText";
// react components for routing our app without refresh
import {Link} from "react-router-dom";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import IconTranslateOutlined from "@material-ui/icons/TranslateOutlined";
import IconInfoOutlined from "@material-ui/icons/InfoOutlined";
import IconHelpOutline from "@material-ui/icons/HelpOutline";
import IconList from "@material-ui/icons/List";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
// import {useAuth0} from "@auth0/auth0-react";
import {Gavel as GavelIcon} from "@material-ui/icons";
import {siteRoutes} from "../../siteRoutes";
import {HeaderUserConfig} from "./HeaderUserConfig";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
    const classes = useStyles();
    const {t, i18n} = useTranslation();

    // const { loginWithRedirect, logout } = useAuth0();

    const conditionsTitle = require("../../assets/text").termsAndConditions.sectionTitle;


    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Link to={siteRoutes.guide + "/topic1"} className={classes.navLink}>
                    <IconList className={classes.icons}/>
                    {t("Guide")}
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Link to={siteRoutes.faq} className={classes.navLink}>
                    <IconHelpOutline className={classes.icons}/>
                    {t("FAQ")}
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Link to={siteRoutes.about} className={classes.navLink}>
                    <IconInfoOutlined className={classes.icons}/>
                    {t("About")}
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Link to={siteRoutes.terms} className={classes.navLink}>
                    <GavelIcon className={classes.icons}/>
                    {t(conditionsTitle)}
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                {/*<Tooltip id={"Language"}*/}
                {/*         title={t("Language")}*/}
                {/*         placement={window.innerWidth > 959 ? "top" : "left"}*/}
                {/*         classes={{tooltip: classes.tooltip}}>*/}

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

                {/*</Tooltip>*/}
            </ListItem>

            <ListItem className={classes.listItem}>
                <HeaderUserConfig styleClasses={classes}/>
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
