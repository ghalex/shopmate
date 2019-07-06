import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex"
  },
  btn: {
    boxShadow: "none",
    width: 36,
    height: 30,
    "& .material-icons": {
      fontSize: 16
    }
  },
  value: {
    width: 42,
    height: 36,
    border: "1px solid #CCC",
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 8px"
  }
}));

export default useStyles;
