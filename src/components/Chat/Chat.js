import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import PropTypes from "prop-types";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth0 } from "@auth0/auth0-react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

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

Chat.propTypes = {
  collection: PropTypes.any
};

export default function Chat({ collection }) {
  const { user } = useAuth0();
  console.log(user);
  const dummy = useRef();
  const messagesRef = firestore.collection(collection);
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
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
        <GridContainer justifyContent="center">
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <span ref={dummy}></span>
        </GridContainer>
      </main>
      <div xs={12} sm={12} md={10}>
        <form onSubmit={sendMessage}>
          <GridContainer xs={12} sm={12} md={10} justifyContent="center">
            <GridItem xs={12} sm={12} md={10}>
              <CustomInput
                labelText="Success input"
                id={formValue}
                success
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: (event) => setFormValue(event.target.value),
                  value: formValue,
                  placeholder: "Password",
                  multiline: true,
                  type: "text"
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Button type="submit" color="success" disabled={!formValue}>
                🕊️Success
              </Button>
            </GridItem>
          </GridContainer>
        </form>
      </div>
    </div>
  );
}

ChatMessage.propTypes = {
  message: PropTypes.any
};

function ChatMessage({ message }) {
  return (
    <>
      <GridItem xs={12} sm={12} md={10}>
        <div className={`message `}>
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={12} md={4}>
              {message.user}
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              {message.text}
            </GridItem>
          </GridContainer>
        </div>
      </GridItem>
    </>
  );
}
