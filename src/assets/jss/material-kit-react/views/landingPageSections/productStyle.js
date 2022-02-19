import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  videoFrame: {
    borderRadius: "5px"
  },
  frameContainer: {
    borderRadius: "5px",
    height: "390px",
    width: "100%",
    backgroundImage: 'url("img/not_found.jpg")',
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#545454"
  }
};

export default productStyle;
