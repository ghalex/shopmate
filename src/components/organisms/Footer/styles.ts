import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    background: "#2E2E2E",
    padding: theme.spacing(4),
    color: "white",
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  },
  links: {
    "& h3": {
      fontSize: 18,
      margin: "0 16px",
      color: "white",
      cursor: "pointer"
    }
  },
  iconBtn: {
    width: 40,
    height: 40,
    padding: 8,
    background: "#EAEAEA",
    margin: 8,
    "& img": {
      width: "100%"
    },
    "&:hover": {
      background: "white"
    }
  }
}));

export default useStyles;
