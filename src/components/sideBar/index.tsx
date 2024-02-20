import { Box, Paper, Stack, Typography } from "@mui/material";
import account from "src/assets/images/account.png";
import boardIco from "src/assets/images/board_ico.png";
import clockIco from "src/assets/images/clock_ico.png";
import docsIco from "src/assets/images/docs_ico.png";
import lockIco from "src/assets/images/lock_ico.png";
import logoResume from "src/assets/images/logo-resumizeme.png";
import searchIco from "src/assets/images/search_ico.png";
import starsIco from "src/assets/images/stars_ico.png";
import templateIco from "src/assets/images/template_ico.png";

const SideBar = () => {
  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
      spacing={2}
    >
      <Stack direction="column">
        <Box className="logo" component={"img"} src={logoResume} />
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={templateIco} />
          <Typography className="bold">My templates</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={searchIco} />
          <Typography className="bold">Search</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={starsIco} />
          <Typography>Software Engineer</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={starsIco} />
          <Typography>Computer hardware engineer</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={starsIco} />
          <Typography>Network Engineer</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={starsIco} />
          <Typography>Technical Support</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={starsIco} />
          <Typography>Network administrator</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={starsIco} />
          <Typography>Management</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={starsIco} />
          <Typography>Data analysis</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={starsIco} />
          <Typography>Computer technician</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={clockIco} />
          <Typography>Past search 1</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={clockIco} />
          <Typography>Past search 2</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={clockIco} />
          <Typography>Computers and information...</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={clockIco} />
          <Typography>Database Administrator</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={clockIco} />
          <Typography>Computer security</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={clockIco} />
          <Typography>Computer Systems Analyst</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={boardIco} />
          <Typography className="bold">My boards</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={docsIco} />
          <Typography>Board 1</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={docsIco} />
          <Typography>Board 2</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={docsIco} />
          <Typography>Board 3</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={lockIco} />
          <Typography>Board agent 1</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={lockIco} />
          <Typography>Board agent 1</Typography>
        </Paper>
        <Paper className="input-field" elevation={0}>
          <Box className="ico-menu" component={"img"} src={lockIco} />
          <Typography>Board agent 1</Typography>
        </Paper>

        <Box className="logo" component={"img"} src={account} />
      </Stack>
    </Stack>
  );
};

export default SideBar;
