import React from "react";
import {
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Checkbox,
    ListItemButton,
} from "@mui/material";

export default function ProgressSidebar({
    modules,
    activeIndex,
    completedModules,
    onSelectModule,
}) {
    return (
        <>
        <Typography variant="h6" gutterBottom>
        Curriculum Progress
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
        {modules.map((module, index) => (
            <ListItem
            key={module.id}
            disablePadding
            selected={activeIndex === index}
            sx={{
                borderRadius: 1,
                "&.Mui-selected": {
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                },
            }}
            >
            <ListItemButton onClick={() => onSelectModule(index)}>
            <ListItemIcon>
            <Checkbox
            edge="start"
            checked={completedModules.includes(module.id)}
            tabIndex={-1}
            disableRipple
            />
            </ListItemIcon>
            <ListItemText primary={module.title} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
        </>
    );
}
