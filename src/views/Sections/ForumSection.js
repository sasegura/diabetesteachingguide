import React from "react";
import { withTranslation } from "react-i18next";
import { PropTypes } from "prop-types";
import Chat from "components/Chat/Chat";

ForumSection.propTypes = {
  t: PropTypes.func
};

function ForumSection() {
  return <Chat collection={"debate"} />;
}
export default withTranslation("translations")(ForumSection);
