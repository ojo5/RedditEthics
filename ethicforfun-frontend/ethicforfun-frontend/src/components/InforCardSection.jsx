import React from "react";
import { Grid, Card, CardContent, CardActions, Typography, Button } from "@mui/material";

const cardData = [
  {
    title: "Learn Ethics",
    desc: "Dive into moral philosophy concepts with clear explanations and real-world examples."
  },
  {
    title: "Test Your Knowledge",
    desc: "Interactive quizzes and scenarios to sharpen your ethical reasoning."
  },
  {
    title: "Explore Philosophers",
    desc: "Discover the thinkers who shaped the moral frameworks we discuss today."
  }
];

export default function InfoCardsSection() {
  return (
    <Grid container spacing={4} justifyContent="center" maxWidth="lg" sx={{ mx: "auto" }}>
      {cardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="div" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
