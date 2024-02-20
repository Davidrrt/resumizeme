import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import avatar from "src/assets/images/avatar.png";

const PersonalInfos = () => {
  return (
    <Box className="infos">
      <Typography variant="h5" className="bold" sx={{ marginBottom: 5 }}>
        Personal Information
      </Typography>
      <Paper className="infos-field" elevation={0}>
        <Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={"Petter"}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={"Cetera"}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={"London"}
            />
            <TextField
              id="outlined-basic"
              label="Postal Code"
              variant="outlined"
              value={"E2 4XF"}
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="Address"
            sx={{ width: 650, marginBottom: 4 }}
            variant="outlined"
            value={"123 Example"}
          />
          <Box>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={"petter@gmail.com"}
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={"+442222233334444"}
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={"Password"}
          />
        </Box>
        <Box className="avatar" component={"img"} src={avatar} />
      </Paper>
      <Typography sx={{ marginBottom: 1 }}>
        Use this email to log in to your
        <Box component="span" sx={{ color: "#1688FE", margin: 0.2 }}>
          resumedone.io
        </Box>
        account and receive notifications.
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: 170,
          backgroundColor: "#1688FE",
          textTransform: "capitalize",
          margin: 2,
          marginLeft: 0,
          boxShadow: "none",
        }}
      >
        Save
      </Button>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Show my profile to serious employers on hirethesbest.io for free"
        />
      </FormGroup>
      <Box className="delete-banner">
        <Typography className="bold" sx={{ marginBottom: 1 }}>
          Delete account
        </Typography>
        <Typography>
          If you delete your account you'll be permanently removing it from our
          systems - you can't undo it.
        </Typography>
        <Typography className="bold" sx={{ color: "#F25773", marginTop: 2 }}>
          Yes, Delete my account
        </Typography>
      </Box>
      <Typography sx={{ marginBottom: 1 }}>
        <Box component="span" sx={{ color: "#1688FE", margin: 0.2 }}>
          Get in touch with our support team
        </Box>
        if you have any question or want to leave some feedback.
        <br />
        We'll be happy to hear from you.
        <br /> <br />
      </Typography>
      <Divider variant="middle" />
      <Box className="infos-field">
        <Typography className="terms">Terms & Conditions</Typography>
        <Typography className="terms">Privacy Policy</Typography>
        <Typography className="terms">FAQ</Typography>
        <Typography className="terms">Contact Us</Typography>
      </Box>
    </Box>
  );
};
export default PersonalInfos;
