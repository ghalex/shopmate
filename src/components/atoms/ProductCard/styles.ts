import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

interface Props {
  hasDiscount?: boolean;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    background: "white",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.20)"
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
