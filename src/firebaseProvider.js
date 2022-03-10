import React, {createContext} from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {siteRoutes} from "./siteRoutes";
import PropTypes from "prop-types";

export const FirebaseContext = createContext({firebaseApp: null, uiConfig: {}});
export const FirebaseProvider = ({children}) => {
    // Configure Firebase.
// const config = {
//     apiKey: process.env.REACT_APP_AUTH_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_AUTH_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_AUTH_APP_ID,
//     measurementId: process.env.REACT_APP_AUTH_MEASUREMENT_ID
// };
// firebase.initializeApp(config);

// TODO version propia cambiar luego *************
    const firebaseConfig = {
        apiKey: "AIzaSyDGYCgY4xP_4Tw-vpsc9yvR9A4OTJIj1NM",
        authDomain: "exampleproject-df2ec.firebaseapp.com",
        projectId: "exampleproject-df2ec",
        storageBucket: "exampleproject-df2ec.appspot.com",
        messagingSenderId: "878775131966",
        appId: "1:878775131966:web:559becb3d303908c32d66f",
        measurementId: "G-1PV9791G6F"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
// ************************************************

// Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'redirect',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: siteRoutes.index,
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
    };

    return <FirebaseContext.Provider value={{firebaseApp, uiConfig}}>
            {children}
        </FirebaseContext.Provider>;
}

FirebaseProvider.propTypes = {
  children: PropTypes.any,
}