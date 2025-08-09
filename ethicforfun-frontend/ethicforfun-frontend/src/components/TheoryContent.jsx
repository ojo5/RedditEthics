import React from "react";
import { Typography, Button, Box } from "@mui/material";
import MarkdownModuleContent from "./MarkdownModuleContent";

export default function TheoryContent({ module, isComplete, onToggleComplete }) {
  if (!module) return null;

  return (
    <Box size={{ width: "100%", boxSizing: "border-box", px: 2 }}>
    <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
    {module.title}
    </Typography>

    <Box
    size={{
      wordBreak: "break-word",
      maxWidth: "900px", // optional max width for better readability
      "& img": { maxWidth: "100%", borderRadius: 2, mb: 3 },
      "& pre": { maxWidth: "100%", overflowX: "auto" },
      mb: 3,
    }}
    >
    {/* Load markdown content dynamically */}
    <MarkdownModuleContent fileLoader={module.file} />
    </Box>

    <Button
    variant="contained"
    color="primary"
    onClick={onToggleComplete}
    sx={{ mt: 2, minWidth: 180 }}
    aria-pressed={isComplete}
    >
    {isComplete ? "Mark as Incomplete" : "Mark as Complete"}
    </Button>
    </Box>
  );
}
