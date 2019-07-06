import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex"
  },
  colorContainer: {
    border: "2px solid transparent",
    margin: "0 4px",
    padding: 4,
    borderRadius: 999,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8
    }
  },
  color: {
    display: "block",
    width: 14,
    height: 14,
    borderRadius: 999,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.20)"
  },
  selected: {
    border: "2px solid #E6E6E6"
  }
}));

export default useStyles;
