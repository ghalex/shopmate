import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: theme.breakpoints.values.md,
    padding: theme.spacing(2),
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
    gridGap: theme.spacing(2),
    gridAutoRows: "320px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, minmax(200px, 1fr))"
    }
  },
  filter: {
    gridRow: "1 / 3"
  }
}));

export default useStyles;
