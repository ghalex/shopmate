import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  paper: {
    padding: "40px 16px",
    maxWidth: "380px !important",
    margin: "8px !important"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  danger: {
    color: "red"
  }
}));

export default useStyles;
