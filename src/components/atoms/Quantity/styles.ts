import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  },
  btn: {
    boxShadow: "none",
    width: 30,
    height: 30,
    minHeight: 30,
    "& .material-icons": {
      fontSize: 16
    }
  },
  value: {
    width: 44,
    height: 30,
    border: "1px solid #CCC",
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 8px"
  }
}));

export default useStyles;
