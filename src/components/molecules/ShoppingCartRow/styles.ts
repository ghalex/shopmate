import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    padding: "12px 0"
  },
  row: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& > div": {
        justifyContent: "flex-start"
      }
    }
  },
  rowContent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  btnRemove: {
    color: "#A6A6A6",
    padding: "0 8px 0 0"
  }
}));

export default useStyles;
