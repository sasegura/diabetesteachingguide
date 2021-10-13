import React, { useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { PropTypes } from "prop-types";
import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import ForumMessage from "components/ForumMessage/ForumMessage";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth0 } from "@auth0/auth0-react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SendIcon from "@material-ui/icons/Send";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { CircularProgress } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_AUTH_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
  storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_AUTH_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_AUTH_APP_ID,
  measurementId: process.env.REACT_APP_AUTH_MEASUREMENT_ID
});
const firestore = firebase.firestore();

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  chatSection: {
    width: "100%",
    maxHeight: "80vh"
  },
  headBG: {
    backgroundColor: "#e0e0e0"
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0"
  },
  messageArea: {
    maxHeight: "70vh",
    overflowY: "auto"
  },
  loaddingArea: {
    minHeight: "70vh",
    overflowY: "auto"
  },
  loaddingIcon: {
    marginTop: "20px"
  }
});

ForumSection.propTypes = {
  t: PropTypes.func,
  collection: PropTypes.any
};

function ForumSection({ collection, t }) {
  const classes = useStyles();
  const { user } = useAuth0();
  const dummy = useRef();
  const messagesRef = firestore.collection(collection);
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages, isLoading] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.name || "",
      picture: user?.picture || "",
      email: user?.email || "",
      nickname: user?.nickname || ""
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div xs={12} sm={12} md={10}>
      <main>
        {isLoading ? (
          <GridContainer
            justifyContent="center"
            className={classes.loaddingArea}
          >
            <CircularProgress size={44} className={classes.loaddingIcon} />
          </GridContainer>
        ) : (
          <GridContainer justifyContent="center">
            <Grid
              container
              component={Paper}
              style={{ marginBottom: "10px" }}
              className={classes.chatSection}
            >
              <Grid item xs={12}>
                <List className={classes.messageArea}>
                  {messages &&
                    messages.map((msg) => (
                      <ForumMessage key={msg.id} message={msg} user />
                    ))}
                  <span ref={dummy}></span>
                </List>
                <Divider />
                <form onSubmit={sendMessage}>
                  <Grid container>
                    <Grid item xs={10}>
                      <CustomInput
                        labelText={t("message")}
                        id={formValue}
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: (event) => setFormValue(event.target.value),
                          value: formValue,
                          placeholder: "",
                          multiline: true,
                          type: "text"
                        }}
                      />
                    </Grid>
                    <Grid item xs={1} align="right">
                      <Button
                        type="submit"
                        color="success"
                        disabled={!formValue}
                      >
                        {t("Send")}
                        <SendIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </GridContainer>
        )}
      </main>
    </div>
  );
  // return <Chat collection={"debate"} />;
}

export default withTranslation("translations")(ForumSection);
