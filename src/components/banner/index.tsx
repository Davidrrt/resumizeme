import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import iconBanner from "src/assets/images/icon-banner.png";
import useStyles from "./styles";

const Banner = () => {
  const { classes } = useStyles();
  return (
    <Paper elevation={3} className={classes.layout}>
      <Box className="children-container">
        <Box className="icon" component={"img"} src={iconBanner} />
        <Box>
          <Typography variant="h5">Premium Account</Typography>
          <Typography className="text-review bad">
            You have premium account, granting you access to all the remarkable
            features offered by ResumeDone. With this privilege, you can indulge
            in the freedom of downloading and unlimited number of resumes and
            cover letters in both PDF and Word formats.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
export default Banner;
