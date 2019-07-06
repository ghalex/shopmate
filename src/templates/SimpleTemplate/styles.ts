import { Theme } from "theme";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#F7F7F7",
    alignItems: "center"
  },
  header: {
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 100
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    flex: 1,
    maxWidth: theme.breakpoints.values.md
  }
}));
