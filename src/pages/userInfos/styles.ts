import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    "& .logo": {
      display: "flex",
      width: "250px",
      justifyContent: "space-evenly",
      flexDirection: "row",
    },
    "& .css-oi4ecq-MuiStack-root": {
      flexDirection: "row",
      borderRight: "1px solid #ececed",
      minHeight: "741px",
    },
    "& .side-container": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      height: "fit-content",
      marginTop: 30,
    },
  },
}));

export default useStyles;
