import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/landing-bg.jpg";
import {StyledFirebaseAuth} from "react-firebaseui";
import {useTranslation} from "react-i18next";
import {login} from "assets/text";
import IconTranslateOutlined from "@material-ui/icons/TranslateOutlined";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import {Typography} from "@material-ui/core";
import {FirebaseContext} from "../../firebaseProvider";
import {Redirect} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {siteRoutes} from "../../siteRoutes";

const useStyles = makeStyles(styles);

export default function LoginPage() {
    const {firebaseApp, uiConfig} = useContext(FirebaseContext);
    const [user] = useAuthState(firebaseApp.auth());
    const [cardAnimaton, setCardAnimation] = useState("cardHidden");
    const classes = useStyles();
    const {t, i18n} = useTranslation();

    if (user){
        return <Redirect to={siteRoutes.index} />
    }

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    // const { ...rest } = props;

    return (
        <div>
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer style={{"justify-content": "center"}}>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <Typography>{t(login.title)}</Typography>
                                    </CardHeader>
                                    <CardBody>
                                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <CustomDropdown
                                            noLiPadding
                                            buttonProps={{
                                                color: "transparent"
                                            }}
                                            hoverColor={"info"}
                                            buttonIcon={IconTranslateOutlined}
                                            dropdownList={[
                                                <Typography key={"lang_es"}
                                                            onClick={() => i18n.changeLanguage("es")}
                                                            style={{textAlign: "center"}}
                                                > Español </Typography>,
                                                <Typography key={"lang_en"}
                                                            onClick={() => i18n.changeLanguage("en")}
                                                            style={{textAlign: "center"}}
                                                > English </Typography>
                                            ]}
                                        />
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                {/*<Footer whiteFont />*/}
            </div>
        </div>
    );
}
