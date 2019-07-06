import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    background: "white",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.2)"
  }
}));

export default useStyles;
