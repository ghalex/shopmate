import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 300,
    paddingTop: 16
  },
  header: {
    padding: "16px 32px"
  },
  contentHeader: {
    display: "flex",
    height: 42,
    marginTop: 24,
    borderBottom: "2px solid #E5E5E5"
  },
  content: {
    padding: "0 32px"
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
