import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    gridRow: "1 / 3",
    background: "white",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("xs")]: {
      gridRow: "1 / 2"
    }
  },
  header: {
    background: "#f7f7f7",
    borderBottom: "1px solid #E5E5E5",
    padding: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    "& > div": {
      padding: "0 0 16px 0",
      "& h3": {
        marginBottom: 8
      },
      "& button": {
        margin: "0 8px 8px 0"
      }
    }
  }
}));

export default useStyles;
