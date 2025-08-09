import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "auto",
        mb: 6,
        p: { xs: 2, sm: 4 },
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
        Ethics, Made Engaging.
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        A collaborative project exploring philosophical ethics through interactive lessons,
        challenges, and discussions.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
      <Button
      variant="contained"
      size="large"
      color="primary"
      component={RouterLink}
      to="/theory"
      >
      Get Started
      </Button>


        <Button variant="outlined" size="large" color="secondary">
          Choose Level
        </Button>

      </Box>
    </Box>
  );
}
