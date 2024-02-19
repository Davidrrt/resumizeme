import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

import useStyles from "./styles";

const Layout = ({ children }: PropsWithChildren<any>) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.layout}>
      <Box className="children-container">
        <Box className="children-wrapper">{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
