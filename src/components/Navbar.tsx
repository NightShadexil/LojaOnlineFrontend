import React from "react";
import { AppBar, Toolbar, Box, Typography, Button, Badge, IconButton, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaletteIcon from "@mui/icons-material/PaletteOutlined"; 
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logoIcon from "../assets/Lhama_Atómica_icone.png"; 

interface NavbarProps {
    onThemeChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeChange }) => {
    const { cart } = useCart();
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <AppBar position="sticky" color="inherit" elevation={1} sx={{ borderBottom: '1px solid', borderColor: 'divider', py: 1 }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
                        <img src={logoIcon} alt="Lhama Logo" style={{ height: '40px', width: '40px' }} />
                        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: '-1px' }}>
                            LHAMA ATÓMICA
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button component={Link} to="/" color="inherit" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 600 }}>
                            Produtos
                        </Button>

                        <IconButton onClick={onThemeChange} color="primary" title="Trocar Cores" size="small">
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