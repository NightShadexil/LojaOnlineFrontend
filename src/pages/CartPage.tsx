import React from "react";
import { Container, Typography, Grid, Paper, IconButton, Button, Box, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, total } = useCart();

    if (cart.length === 0) {
        return (
            <Container sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>O seu carrinho está vazio</Typography>
                <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
                    Voltar à Loja
                </Button>
            </Container>
        );
    }

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                Carrinho de Compras
            </Typography>

            <Grid container spacing={4}>
                {/* Lista de Itens */}
                <Grid>
                    {cart.map((item) => (
                        <Paper key={item.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '80px', objectFit: 'contain' }} />
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.price.toFixed(2)}€ / un
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <RemoveIcon fontSize="small" />
                                        </IconButton>
                                        <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                                        <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <AddIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                        {(item.price * item.quantity).toFixed(2)}€
                                    </Typography>
                                    <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Grid>

                {/* Resumo do Pedido */}
                <Grid>
                    <Paper sx={{ p: 3, bgcolor: '#f9f9f9' }}>
                        <Typography variant="h6" gutterBottom>Resumo</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography color="text.secondary">Subtotal</Typography>
                            <Typography>{total.toFixed(2)}€</Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                            <Typography variant="h6">Total</Typography>
                            <Typography variant="h6" color="primary">{total.toFixed(2)}€</Typography>
                        </Box>
                        <Button variant="contained" fullWidth size="large" color="success">
                            Finalizar Compra
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CartPage;