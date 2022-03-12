import React, {useContext} from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import IconPersonOutlineOutlined from "@material-ui/icons/PersonOutlineOutlined";
import {Link} from "react-router-dom";
import {siteRoutes} from "../../siteRoutes";
// import Login from "mdi-material-ui/Login";
import {FirebaseContext} from "../../firebaseProvider";
import {useAuthState} from "react-firebase-hooks/auth";
import {getAuth, signOut} from "firebase/auth";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconAccountCircle from "@material-ui/icons/AccountCircle";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import Logout from "mdi-material-ui/Logout";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import {CircularProgress} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Login from "mdi-material-ui/Login";

export const HeaderUserConfig = ({styleClasses}) => {
    const {firebaseApp} = useContext(FirebaseContext);
    const auth = getAuth(firebaseApp)
    const [user, loading, error] = useAuthState(auth);
    const {t} = useTranslation();
    const history = useHistory();

    const lgnText =  require("../../assets/text").login.title;
    const userMenu = [
        <Link
            key="_K1_"
            to={siteRoutes.profile}
            className={styleClasses.dropdownLink}
            style={{padding: "0px"}}
        >
            <ListItem>
                <ListItemIcon>
                    <IconAccountCircle/>
                </ListItemIcon>

                <ListItemText primary={user?.displayName || "notUsr"}/>
            </ListItem>
        </Link>,
        <Divider key="_K2_"/>,
        // <Link key="_K3_"></Link>
        <ListItem key="_K3_">
            <ListItemIcon>
                <IconShoppingCartOutlined/>
            </ListItemIcon>
            <ListItemText primary={t("ShopCart")}/>
        </ListItem>,
        <Divider key="_K4_"/>,
        // <ListItem>
        //     <ListItemIcon>
        //         <Login/>
        //     </ListItemIcon>
        //
        //     <ListItemText
        //         primary={<Link
        //             to={siteRoutes.login}
        //             className={classes.dropdownLink}
        //             style={{padding: "0px"}}
        //         > {t("Login")} </Link>}
        //         // onClick={() => {
        //         //   loginWithRedirect();
        //         // }}
        //     />
        //
        // </ListItem>,
        // <Link
        //     key="_K5_"
        //     to={siteRoutes.index}
        //     className={styleClasses.dropdownLink}
        //     style={{padding: "0px"}}
        // >
        <ListItem
            key="_K5_"
            onClick={() => {
                // logout({ returnTo: window.location.origin });
                signOut(auth);
                history.push(siteRoutes.index);
            }}
        >
            <ListItemIcon>
                <Logout/>
            </ListItemIcon>
            <ListItemText primary={t("Logout")}/>
        </ListItem>
        // </Link>
    ];

    if (loading) {
        return <CircularProgress color="inherit" size="20px" style={{margin: "16px"}}/>;
    }
    if (error) {
        return 'error';
    }
    if (user) {
        return (
            <CustomDropdown
                noLiPadding
                buttonProps={{
                    className: styleClasses.navLink,
                    color: "transparent"
                }}
                hoverColor={"info"}
                buttonIcon={IconPersonOutlineOutlined}
                dropdownList={userMenu}
            />

        );
    }
    return (
        <ListItem className={styleClasses.listItem}>
            <Link to={siteRoutes.login} className={styleClasses.navLink}>
                <Login className={styleClasses.icons}/>
                {t(lgnText)}
            </Link>
        </ListItem>
    );
}

HeaderUserConfig.propTypes = {
    "styleClasses": PropTypes.object,
}