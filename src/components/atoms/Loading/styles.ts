import { Theme } from "theme";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
    padding: 32
  },
  progress: {
    marginBottom: 12
  },
  title: {
    lineHeight: 1,
    marginTop: 4
  },
  logo: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 46
  }
}));

export default useStyles;
