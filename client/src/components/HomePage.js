import React from 'react';
import {
    AppBar, Toolbar, Typography, Button, Box, Stack, Container, Link
} from '@mui/material';

export default function HomePage() {
    return (
        <>
        {/* Fixed Navbar */}
        <AppBar position="fixed" color="primary" elevation={2}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', cursor: 'default' }}>
        EthicsLearn
        </Typography>
        <Stack direction="row" spacing={2}>
        <Button
        variant="outlined"
        color="inherit"
        onClick={() => window.location.href = '/login'}
        sx={{ borderColor: 'white' }}
        >
        Login
        </Button>
        <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.href = '/register'}
        >
        Register
        </Button>
        </Stack>
        </Toolbar>
        </AppBar>

        {/* Main content */}
        <Container maxWidth="sm" sx={{ mt: 12, mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Learn Ethics for All Ages
        </Typography>

        <Typography variant="h6" paragraph>
        Welcome to the Ethics Learning Platform! Explore ethics from beginner to advanced levels with lessons, quizzes, and real-world scenarios.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mb={4}>
        <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => window.location.href = '/start'}
        >
        Start Learning
        </Button>

        </Stack>

        <Typography variant="h5" gutterBottom>
        What You Can Find Here
        </Typography>

        <Typography paragraph>
        Our platform is designed for learners of all ages and backgrounds. Whether you're just starting out or looking to deepen your understanding, you will find structured lessons covering key ethical concepts and practical dilemmas.
        </Typography>

        <Typography paragraph>
        Progress through tailored lessons, engage with interactive quizzes, and track your learning journey step by step.
        </Typography>

        <Typography paragraph>
        We believe ethics is for everyone — helping you make better decisions and understand the moral challenges in everyday life.
        </Typography>

        <Box textAlign="left" maxWidth={400} mx="auto" mb={6}>
        <ul>
        <li>Interactive lessons with clear, easy-to-understand content</li>
        <li>Multiple-choice quizzes to reinforce learning</li>
        <li>Progress tracking personalized to your pace</li>
        <li>Content curated to be engaging and accessible for all ages</li>
        </ul>
        </Box>

        <Box component="footer" mt={6} mb={3}>
        <Link href="/about" underline="hover" color="primary" sx={{ mx: 1 }}>
        About
        </Link>
        <Link href="/contact" underline="hover" color="primary" sx={{ mx: 1 }}>
        Contact
        </Link>
        <Link href="/privacy" underline="hover" color="primary" sx={{ mx: 1 }}>
        Privacy
        </Link>
        </Box>
        </Container>
        </>
    );
}
