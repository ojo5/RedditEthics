import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        {/* Logo / Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          Ethic for Fun
        </Typography>

        {/* Buttons */}
        <Box>
          <Button color="inherit" href="/register">Register</Button>
          <Button color="inherit" href="/login">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
