import { Box, Stack } from "@mui/material";
import logoResume from "src/assets/images/logo-resumizeme.png";

const SideBar = () => {
  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
      spacing={2}
    >
      <Box className="logo" component={"img"} src={logoResume} />
    </Stack>
  );
};

export default SideBar;
