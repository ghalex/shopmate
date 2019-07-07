import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

interface Props {
  hasDiscount?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "100%",
    minHeight: 500,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    background: "#FFFFFF",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.20)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      margin: 0,
      textAlign: "center"
    }
  },
  images: {
    flex: 0.8,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2)
  },
  imagesPreview: {
    flex: 1,
    borderRadius: 8
  },
  imagesList: {
    height: 90,
    textAlign: "center",
    paddingTop: theme.spacing(2),
    "& img": {
      width: 90,
      height: "100%",
      marginRight: 8,
      borderRadius: 8
    }
  },
  imagesSelected: {
    border: "1px solid red"
  },
  details: {
    flex: 1.2,
    padding: theme.spacing(2)
  },
  detailsRow: {
    marginTop: 16
  },
  price: ({ hasDiscount }: Props) => ({
    textDecoration: hasDiscount ? "line-through" : "none"
  })
}));

export default useStyles;
