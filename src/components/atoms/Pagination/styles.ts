import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "8px 16px",
    marginBottom: 16,
    borderRadius: 999,
    background: "white",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.2)",
    fontWeight: "bold",
    color: "#888",
    cursor: "pointer",
    alignSelf: "center"
  }
}));

export default useStyles;
