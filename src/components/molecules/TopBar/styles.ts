import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    padding: "12px 30px",
    backgroundColor: "#EFEFEF",
    "& a": {
      cursor: "pointer"
    }
  }
}));

export default useStyles;
