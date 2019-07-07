import { Theme } from "theme";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#F7F7F7",
    alignItems: "center"
  }
}));
