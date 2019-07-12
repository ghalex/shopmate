import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: any) => ({
    width: 260,
    borderRadius: 18,
    padding: "3px 12px",
    margin: "0 8px",
    backgroundColor: props.variant === "white" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)"
  }),
  field: {
    width: "100%",
    "& .MuiInputAdornment-root": {
      color: "white"
    },
    "& input": {
      color: "white",
      fontWeight: "bold"
    }
  }
}));

export default useStyles;
