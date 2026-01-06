import React from "react";
import { AppBar, Toolbar, Box, Typography, Button, Badge, IconButton, Container, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaletteIcon from "@mui/icons-material/PaletteOutlined";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
// Importamos o ícone da pasta public (o caminho no Vite é relativo à raiz da public)
import logoIcon from "/Lhama_Atómica_icone.png";

interface NavbarProps {
    onThemeChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeChange }) => {
    const { cart } = useCart();
    // Acedemos ao tema atual do Material UI para usar as cores dinâmicas
    const theme = useTheme();
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={0}
            sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper', // Segue o fundo do tema
                transition: 'background-color 0.3s ease' // Transição suave na troca de tema
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                    {/* Logótipo com Ícone e Texto */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
                        <img
                            src={logoIcon}
                            alt="Lhama Logo"
                            style={{ height: '45px', width: '45px', borderRadius: '50%' }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 900,
                                letterSpacing: '-1px',
                                display: { xs: 'none', sm: 'block' } // Esconde o texto em ecrãs muito pequenos
                            }}
                        >
                            LHAMA ATÓMICA
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button component={Link} to="/" color="inherit" sx={{ fontWeight: 600 }}>
                            Produtos
                        </Button>

                        {/* Botão de Tema Otimizado: muda de cor conforme o tema ativo */}
                        <IconButton
                            onClick={onThemeChange}
                            sx={{
                                ml: 1,
                                color: theme.palette.primary.main, // Cor dinâmica do tema
                                border: '1px solid',
                                borderColor: 'divider',
                                '&:hover': { bgcolor: 'action.hover' }
                            }}
                            title="Trocar Tema"
                        >
                            <PaletteIcon fontSize="small" />
                        </IconButton>

                        <IconButton component={Link} to="/cart" color="primary">
                            <Badge badgeContent={itemCount} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;