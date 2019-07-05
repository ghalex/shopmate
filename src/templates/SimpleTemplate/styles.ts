import { Theme } from "theme";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    background: "#F7F7F7"
  }
}));
