import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 16
  },
  header: {
    padding: "16px 32px"
  },
  contentHeader: {
    display: "flex",
    height: 42,
    marginTop: 24,
    borderBottom: "2px solid #E5E5E5",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  content: {
    padding: "0 32px 16px 32px",
    minHeight: 200,
    maxHeight: 400,
    overflow: "auto"
  },
  footer: {
    display: "flex",
    alignItems: "center",
    height: 96,
    backgroundColor: "#EFEFEF",
    justifyContent: "space-between",
    padding: "0 32px"
  }
}));

export default useStyles;
