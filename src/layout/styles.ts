import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    "@media(max-width:767px)": {
      width: "100%",
    },
    "& .wrapper ": {
      padding: "0 16px",
      gap: "16px",
      display: "flex",
      flexDirection: "column",
    },
    "& .dashboard-carousel": {
      width: "100%",
    },
    float: "right",
    transition: "width .3s ease",
  },
  main: {
    gap: "16px",
    width: "100%",
    "& .analytics-wrapper": {
      gap: "16px",
      justifyContent: "space-between",
    },
  },
  fab: {
    "@media(min-width:768px)": {
      display: "none",
    },
    color: "white",
    position: "fixed",
    bottom: "16px",
    right: "16px",
    zIndex: 4,
    transition: "transform 300ms ease",
    "&.open": {
      transform: "rotate(45deg)",
    },
  },
  wrapper: {
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    transition: "width .3s ease",
    "@media(max-width:767px)": {
      display: "none",
    },
    "& .link-item-wrapper": {
      width: "100%",
      borderRadius: "8px",
      "& .link.child span": {
        color: "#99A2B8",
      },
      "&.open": {
        backgroundColor: "#ffffff1a",
      },
      "&.open button, & .link.active, & .link.child.active": {
        "& span, & svg": {
          color: "white",
        },
      },
    },
    "& .link": {
      display: "flex",
      alignItems: "center",
      color: "#7D8597",
      gap: "1rem",
      height: "45px",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      width: "100%",
      justifyContent: "flex-start",
      transition: "color 1s ease",
      "&, &:hover": {
        textDecoration: "none",
      },
      "&.child": {
        padding: 0,
        width: "fit-content",
        "&.active": {
          backgroundColor: "transparent",
          color: "white",
        },
      },
    },
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "& .children-container": {
      zIndex: 1,
      display: "flex",
      flexDirection: "row",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      // gap: 16,
      "& .children-wrapper": {
        overflowY: "auto",
        overflowX: "hidden",
      },
    },
  },
}));

export default useStyles;
