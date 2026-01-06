import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#2563eb", // Azul moderno para botões de ação
            dark: "#1e40af",
            light: "#60a5fa",
        },
        secondary: {
            main: "#f59e0b", // Amarelo/Laranja para badges ou promoções
        },
        background: {
            default: "#f8fafc", // Fundo cinza muito claro para destacar os cards brancos
            paper: "#ffffff",
        },
        text: {
            primary: "#1e293b",
            secondary: "#64748b",
        },
    },
    typography: {
        fontFamily: "'Inter', 'system-ui', '-apple-system', sans-serif",
        h4: {
            fontWeight: 700,
            letterSpacing: "-0.02em",
        },
        h6: {
            fontWeight: 600,
        },
        button: {
            textTransform: "none", // Botões com texto natural, mais moderno que tudo em maiúsculas
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12, // Bordas mais arredondadas para um aspeto amigável 
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "8px 20px",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    },
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    border: "1px solid #e2e8f0", // Borda subtil em vez de sombras pesadas
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                        transform: "translateY(-4px)", // Efeito visual ao passar o rato 
                    },
                },
            },
        },
    },
});

export default theme;