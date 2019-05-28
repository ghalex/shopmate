import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

interface CSSProps {
  variant: { main: string; over: string; accent: string };
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: ({ variant }: CSSProps) => ({
      backgroundColor: variant.main,
      "& .logo": {
        color: variant.accent
      }
    }),
    brand: {
      width: "100%"
    },
    menu: ({ variant }: CSSProps) => ({
      display: "flex",
      alignItems: "center",
      color: variant.over,
      "& a": {
        color: variant.over,
        padding: 20,
        cursor: "pointer"
      },
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    }),
    burger: ({ variant }: CSSProps) => ({
      fontSize: 9,
      margin: 8,
      "& .burger-lines, & .burger-lines:after, & .burger-lines:before": {
        backgroundColor: variant.over,
        height: 3
      }
    }),
    badge: ({ variant }: CSSProps) => ({
      color: variant.main,
      backgroundColor: variant.accent
    })
  };
});

export default useStyles;
