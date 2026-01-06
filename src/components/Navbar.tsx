import React from "react";
import { AppBar, Toolbar, Typography, Button, Badge, IconButton, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
    const { cart } = useCart();

    // Calcular o total de itens (quantidade somada)
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <AppBar position="sticky" color="default" sx={{ mb: 4, backgroundColor: 'white' }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
                    {/* Logótipo / Nome da Loja */}
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                            fontWeight: 800,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        TECH STORE
                    </Typography>

                    {/* Ações da Direita */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button component={Link} to="/" color="inherit">
                            Produtos
                        </Button>

                        <IconButton
                            component={Link}
                            to="/cart"
                            color="primary"
                            aria-label="carrinho"
                        >
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

// Importação necessária para o Box no código acima
import { Box } from "@mui/material";

export default Navbar;