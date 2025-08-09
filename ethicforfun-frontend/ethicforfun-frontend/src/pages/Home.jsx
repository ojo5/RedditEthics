import { Container, Typography, Box, Paper } from "@mui/material";

function Home() {
  return (
    <Container sx={{ marginTop: "100px" }}>
    <Paper elevation={3} sx={{ padding: "2rem", backgroundColor: "#f6f6f6" }}>
    <Typography variant="h4" gutterBottom>
    Welcome to Ethic for Fun
    </Typography>
    <Typography variant="body1" gutterBottom>
    Our project is dedicated to teaching ethics in an engaging, fun, and
    interactive way. Whether you’re a beginner exploring basic principles
    or an advanced learner diving deep into philosophy, we’ve got lessons
    and quizzes tailored to your needs.
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ marginTop: "1.5rem" }}>
    What You’ll Find Here:
    </Typography>
    <ul>
    <li>Level-based learning paths</li>
    <li>Lessons with visuals</li>
    <li>Multiple-choice quizzes</li>
    <li>Progress tracking</li>
    </ul>
    </Paper>
    </Container>
  );
}

export default Home;
