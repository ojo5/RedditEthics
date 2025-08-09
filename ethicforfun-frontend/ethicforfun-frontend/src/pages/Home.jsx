import { Container, Typography, Box, Paper } from "@mui/material";

import HeroSection from "../components/HeroSection";
import InfoCardsSection from "../components/InfoCardSection";

function Home() {
  return (




    <Container sx={{ marginTop: "20px" }}>

      <Box
      sx={{
          minHeight: "10vh",
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
          pt: 8, // space for navbar
      }}
      >
      <HeroSection />
      <InfoCardsSection />
      </Box>

    </Container>
  );
}

export default Home;
