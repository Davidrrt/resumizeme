import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    "& .logo": {
      display: "flex",
      width: " 285px",
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
    "& .input-field": {
      display: "flex",
      alignItems: "center",
    },
    "& .ico-menu": {
      width: 21,
      margin: 10,
    },
    "& .bold": {
      fontWeight: 600,
    },
    "& .avatar": {
      marginLeft: 20,
      width: 144,
    },
    "& .infos": {
      width: "71%",
      marginTop: 50,
    },
    "& .infos-field": {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
    },

    "& .terms": {
      color: "#595964",
      padding: 10,
    },
    "& .delete-banner": {
      padding: "24px 20px",
      margin: 20,
      marginLeft: 0,
      border: "solid #ececed",
      borderRadius: 18,
    },
    "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
      marginRight: 25,
      marginBottom: 25,
      width: 312,
    },
  },
}));

export default useStyles;
