import { Box, Stack } from "@mui/material";
import Banner from "src/components/banner";
import PersonalInfos from "src/components/personalInfos";
import SideBar from "src/components/sideBar";
import useStyles from "./styles";

const UserInfos = () => {
  const { classes } = useStyles();
  return (
    <Stack className={classes.container} spacing={2}>
      <SideBar />
      <Box className="side-container">
        <Banner />
        <PersonalInfos />
      </Box>
    </Stack>
  );
};

export default UserInfos;
