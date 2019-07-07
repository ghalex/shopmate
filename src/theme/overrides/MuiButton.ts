import { CSSProperties } from "@material-ui/styles";

const root: CSSProperties = {
  textTransform: "none"
};

const contained: CSSProperties = {
  boxShadow: "none",
  textTransform: "none",
  textDecoration: "none",
  borderRadius: 24,
  padding: "12px 28px",
  fontFamily: "'Montserrat', serif",
  fontWeight: "bold",
  "&:active": {
    boxShadow: "none"
  }
};

const containedSecondary: CSSProperties = {
  color: "#F62F5E"
};

const sizeSmall = {
  padding: "4px 16px"
};

export default {
  root,
  contained,
  sizeSmall,
  containedSecondary
};
