import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import moment from "moment";

ForumMessage.propTypes = {
  message: PropTypes.any,
  user: PropTypes.any
};

export default function ForumMessage({ message, user }) {
  return (
    <>
      <ListItem key={message.id}>
        <Grid container>
          <Grid item xs={12}>
            <ListItemText
              align={user.name === message.user ? "left" : "right"}
              primary={message.text}
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText
              align={user.name === message.user ? "left" : "right"}
              secondary={`${message.user} ${moment(
                message?.createdAt?.seconds &&
                  message?.createdAt?.seconds * 1000
              ).format("DD MMM YYYY hh:mm a")}`}
            ></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    </>
  );
}
