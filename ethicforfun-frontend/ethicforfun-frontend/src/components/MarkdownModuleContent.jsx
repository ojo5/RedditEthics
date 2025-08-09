import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box, CircularProgress } from "@mui/material";

export default function MarkdownModuleContent({ fileLoader }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fileLoader()
      .then((module) => setContent(module.default))
      .catch(() => setContent("Error loading content"));
  }, [fileLoader]);

  if (!content) {
    return (
        <Box
        sx={{
            maxWidth: "100%",
            wordBreak: "break-word",
            "& img": { maxWidth: "100%", borderRadius: 2, mb: 3 },
            "& pre": { maxWidth: "100%", overflowX: "auto" },
        }}
        >
        <CircularProgress />
      </Box>
    );
  }

  return (
      <Box
      sx={{
          width: "100%",           // take full width of grid cell
          wordBreak: "break-word", // break long words if needed
          px: 2,                  // optional padding inside content for readability
          "& img": { maxWidth: "100%", borderRadius: 2, mb: 3 },
          "& pre": { maxWidth: "100%", overflowX: "auto" },
      }}
      >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Box>
  );
}
