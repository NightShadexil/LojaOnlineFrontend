import React from "react";
import { Box, Button, Typography, Divider, IconButton, Container, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
    const { cart, removeFromCart } = useCart();

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal;

    if (cart.length === 0) return (
        <Container sx={{ py: 8, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>O carrinho da Lhama está vazio</Typography>
            <Button variant="contained" component={Link} to="/">Voltar à Loja</Button>
        </Container>
    );

    return (
        <Container maxWidth={false} sx={{ py: 2, px: 2 }}>
            <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>Carrinho</Typography>

                <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                    {/* Lista de Itens */}
                    <Box sx={{ flex: 1 }}>
                        {cart.map((item) => (
                            <Paper
                                key={item.id}
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: 2,
                                    mb: 2,
                                    bgcolor: 'background.paper',
                                    borderColor: 'divider'
                                }}
                            >
                                <Box sx={{ width: 80, height: 80, flexShrink: 0, bgcolor: 'white', borderRadius: 1, p: 0.5 }}>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </Box>
                                <Typography sx={{ flex: 1, mx: 2, fontWeight: 600, color: 'text.primary' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ mx: 2, fontWeight: 700, color: 'text.primary' }}>
                                    {item.price.toFixed(2)}€
                                </Typography>
                                <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Paper>
                        ))}
                    </Box>

                    {/* Resumo do Carrinho */}
                    <Paper
                        variant="outlined"
                        sx={{
                            width: { xs: '100%', md: 350 },
                            p: 3,
                            bgcolor: 'background.paper', 
                            color: 'text.primary',       
                            borderRadius: 2,
                            position: 'sticky',
                            top: 100,
                            alignSelf: 'flex-start'
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Resumo</Typography>
                        <Divider sx={{ mb: 2 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography sx={{ color: 'text.secondary' }}>Subtotal</Typography>
                            <Typography sx={{ fontWeight: 600 }}>{subtotal.toFixed(2)}€</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography sx={{ color: 'text.secondary' }}>Envio</Typography>
                            <Typography sx={{ color: 'success.main', fontWeight: 700 }}>Grátis</Typography>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>Total</Typography>
                            <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
                                {total.toFixed(2)}€
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            fullWidth
                            color="success"
                            size="large"
                            sx={{ fontWeight: 700 }}
                        >
                            Finalizar Compra
                        </Button>

                        <Button
                            variant="outlined"
                            fullWidth
                            component={Link}
                            to="/"
                            sx={{ mt: 2 }}
                        >
                            Continuar a Comprar
                        </Button>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
};

export default CartPage;