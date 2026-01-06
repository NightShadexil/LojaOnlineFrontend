import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Grid, Typography, Button, Box, CircularProgress, Chip, Divider } from "@mui/material";
import { api } from "../services/api";
import { useCart } from "../context/CartContext";
import type { Produto } from "../types"; // Importação correta de tipo

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState<Produto | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            api.getProduct(id)
                .then(setProduct)
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}><CircularProgress /></Box>;
    if (!product) return <Typography>Produto não encontrado.</Typography>;

    return (
        <Container sx={{ py: 5 }}>
            <Button onClick={() => navigate(-1)} sx={{ mb: 3 }}>Voltar</Button>
            <Grid container spacing={4}>
                <Grid>
                    <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }} />
                </Grid>
                <Grid>
                    <Chip label={product.category} color="secondary" sx={{ mb: 2 }} />
                    <Typography variant="h3" gutterBottom>{product.title}</Typography>
                    <Typography variant="h4" color="primary" gutterBottom>{product.price.toFixed(2)}€</Typography>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="body1" paragraph>{product.description}</Typography>
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={() => addToCart(product)}
                        sx={{ mt: 2 }}
                    >
                        Adicionar ao Carrinho
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetailPage;