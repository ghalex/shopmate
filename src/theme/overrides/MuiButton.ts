import { CSSProperties } from "@material-ui/styles";

const root: CSSProperties = {
  textTransform: "none"
};

const contained: CSSProperties = {
  boxShadow: "none",
  textTransform: "none",
  borderRadius: 24,
  padding: "12px 28px",
  fontFamily: "'Montserrat', serif",
  fontWeight: "bold",
  "&:active": {
    boxShadow: "none"
  }
};

export default {
  root,
  contained
};
