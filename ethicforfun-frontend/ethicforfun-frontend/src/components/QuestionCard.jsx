import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function QuestionCard({
  question,
  type = "radio", // "radio" or "input"
  options = [],
  onHint,
  onAnswer,
  onPrev,
  onNext,
  onMarkDone,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {question}
        </Typography>

        {type === "radio" && (
          <RadioGroup
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {options.map((option, idx) => (
              <FormControlLabel
                key={idx}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        )}

        {type === "input" && (
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your answer..."
            value={inputAnswer}
            onChange={(e) => setInputAnswer(e.target.value)}
            sx={{ mt: 2 }}
          />
        )}

        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          <Button variant="outlined" onClick={onHint}>
            Hint
          </Button>
          <Button variant="outlined" onClick={onAnswer}>
            Answer
          </Button>
        </Box>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained" color="primary" onClick={onPrev}>
            Previous
          </Button>
          <Button variant="contained" color="primary" onClick={onNext}>
            Next
          </Button>
        </Box>
        <Button variant="contained" color="primary" onClick={onMarkDone}>
          Mark as Done
        </Button>
      </CardActions>
    </Card>
  );
}
