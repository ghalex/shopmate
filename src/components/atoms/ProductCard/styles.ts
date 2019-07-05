import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

interface Props {
  hasDiscount?: boolean;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(2),
    background: "white",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.2)",
    transition: "box-shadow .3s ease",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)"
    },
    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    "&:hover $overlay": {
      opacity: 1
    }
  },
  overlay: {
    opacity: 0,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(255, 255, 255, 0.95)",
    transition: "opacity .3s ease",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: "80%",
    padding: theme.spacing(2)
  },
  price: ({ hasDiscount }: Props) => ({
    textDecoration: hasDiscount ? "line-through" : "none"
  })
}));

export default useStyles;
