import React, { useState } from "react";
import {
  Grid,
  Box,
  Drawer,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TheoryContent from "../components/TheoryContent";
import ProgressSidebar from "../components/ProgressSidebar";
import modulesData from "../data/modulesMdData";
import QuestionCard from "../components/QuestionCard";

export default function TheoryModulePage() {
  const [activeModule, setActiveModule] = useState(0);
  const [completedModules, setCompletedModules] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleComplete = () => {
    const moduleId = modulesData[activeModule].id;
    setCompletedModules((prev) =>
    prev.includes(moduleId)
    ? prev.filter((id) => id !== moduleId)
    : [...prev, moduleId]
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 300;
  const drawer = (
    <Box sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
    Modules
    </Typography>
    <ProgressSidebar
    modules={modulesData}
    activeIndex={activeModule}
    completedModules={completedModules}
    onSelectModule={(index) => {
      setActiveModule(index);
      setMobileOpen(false);
    }}
    />
    </Box>
  );

  return (
    <>
    {/* Mobile AppBar */}
    <AppBar
    position="fixed"
    sx={{
      display: { md: "none" },
      top: "64px",
      bgcolor: "background.paper",
      color: "text.primary",
      borderBottom: "1px solid",
      borderColor: "divider",
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
    elevation={0}
    >
    <Toolbar>
    <IconButton
    color="inherit"
    edge="start"
    onClick={handleDrawerToggle}
    aria-label="open drawer"
    sx={{ mr: 2 }}
    >
    <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap>
    Modules
    </Typography>
    </Toolbar>
    </AppBar>

    {/* Main layout */}
    <Grid container spacing={2} sx={{ mx: 20 }}>
    {/* Main content */}
    <Grid item size={9} md={9} sx={{ mt: 20 }}>
      <TheoryContent
      module={modulesData[activeModule]}
      isComplete={completedModules.includes(
        modulesData[activeModule].id
      )}
      onToggleComplete={toggleComplete}
      />

      {/* Modular Question Card */}
      <QuestionCard
      question="What is the capital of France?"
      type="radio"
      options={["Paris", "London", "Rome"]}
      onHint={() => alert("It's known as the city of love ❤️")}
      onAnswer={() => alert("Correct answer: Paris")}
      onPrev={() => alert("Go to previous question")}
      onNext={() => alert("Go to next question")}
      onMarkDone={toggleComplete}
      />
    </Grid>

    {/* Sidebar */}
    <Grid item size={3} md={3} sx={{ mt: 20 }}>
    {drawer}
    </Grid>
    </Grid>

    {/* Mobile Drawer */}
    <Drawer
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{ keepMounted: true }}
    sx={{
      display: { xs: "block", md: "none" },
      "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
    }}
    >
    {drawer}
    </Drawer>
    </>
  );
}
