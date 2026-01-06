import { createTheme } from "@mui/material/styles";

const sharedStyles = {
    shape: { borderRadius: 12 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { padding: "8px 20px", boxShadow: "none", textTransform: "none" as const, fontWeight: 600 },
            },
        },
        MuiPaper: {
            defaultProps: { elevation: 0 },
            styleOverrides: {
                root: {
                    border: "1px solid",
                    borderColor: "divider",
                    // Removida qualquer cor fixa para deixar o tema atuar
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
        primary: { main: "#003049" },
        background: { default: "#e3f2fd", paper: "#ffffff" },
        text: { primary: "#003049", secondary: "#455a64" },
    },
});

export const pinkTheme = createTheme({
    ...sharedStyles,
    palette: {
        mode: "light",
        primary: { main: "#ad1457" },
        background: { default: "#fce4ec", paper: "#ffffff" },
        text: { primary: "#ad1457", secondary: "#880e4f" },
    },
});

export const darkTheme = createTheme({
    ...sharedStyles,
    palette: {
        mode: "dark",
        primary: { main: "#38bdf8" },
        background: {
            default: "#0f172a", // Fundo do ecrã quase preto
            paper: "#1e293b"    // Cor dos cartões (Azul Ardósia Escuro)
        },
        text: {
            primary: "#f8fafc",   // Texto Branco Gelo (Leitura perfeita)
            secondary: "#94a3b8"  // Texto Cinza para rótulos secundários
        },
        divider: "rgba(255, 255, 255, 0.12)",
    },
});