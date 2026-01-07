import { createTheme } from "@mui/material/styles";

const sharedStyles = {
    shape: { borderRadius: 12 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "8px 20px",
                    boxShadow: "none",
                    textTransform: "none" as const,
                    fontWeight: 600,
                    borderRadius: 8
                },
            },
        },
        MuiPaper: {
            defaultProps: { elevation: 0 },
            styleOverrides: {
                root: {
                    border: "1px solid",
                    borderColor: "divider",
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": { transform: "translateY(-4px)" }
                },
            },
        },
    },
};

export const maritimeTheme = createTheme({
    ...sharedStyles,
    palette: {
        mode: "light",
        primary: { main: "#003049", light: "#8ecae6" },
        background: { default: "#e3f2fd", paper: "#ffffff" }, // Fundo Sólido
        text: { primary: "#003049", secondary: "#455a64" },
    },
});

export const pinkTheme = createTheme({
    ...sharedStyles,
    palette: {
        mode: "light",
        primary: { main: "#ad1457", light: "#f8bbd0" },
        background: { default: "#fce4ec", paper: "#ffffff" }, // Fundo Sólido
        text: { primary: "#ad1457", secondary: "#880e4f" },
    },
});

export const darkTheme = createTheme({
    ...sharedStyles,
    palette: {
        mode: "dark",
        primary: { main: "#38bdf8", light: "#0ea5e9" },
        background: {
            default: "#0f172a", // Fundo Sólido
            paper: "#1e293b"
        },
        text: {
            primary: "#f8fafc",
            secondary: "#94a3b8"
        },
        divider: "rgba(255, 255, 255, 0.12)",
    },
});