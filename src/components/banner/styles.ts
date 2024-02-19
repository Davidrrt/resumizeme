import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  layout: {
    backgroundColor: "#008B5D",
    width: "72%",
    borderRadius: 15,
    "& .icon": {
      marginRight: 15,
      width: 75,
    },
    "& .children-container": {
      margin: 0,
      color: "white",
      display: "flex",
      flexDirection: "row",
      padding: 25,
      alignItems: "center",
      width: "95%",
    },
  },
}));

export default useStyles;
