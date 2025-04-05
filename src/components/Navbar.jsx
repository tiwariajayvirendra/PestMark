import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ background: 'radial-gradient(circle, #24c6dc, #514a9d)' }} // Correct way to set background color
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
              fontFamily: "Arial, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#ffd700", // Change color on hover
              },
              "&:active": {
                color: "#ffd700", // Change color on hover
              },
              "&:focus": {
                color: "#ffd700", // Change color on hover
              },
            }}
          >
            Pest Mark Facility Management
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/services">
              Services
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
              About
            </Button>
            <Button color="inherit" component={RouterLink} to="/contact">
              Contact
            </Button>
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
            <Button color="inherit" component={RouterLink} to="/register">
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
