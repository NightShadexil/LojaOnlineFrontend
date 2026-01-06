import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box, CircularProgress, Chip, Divider } from "@mui/material";
import { api } from "../services/api";
import { useCart } from "../context/CartContext";
import type { Produto } from "../types";

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Produto | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            api.getProduct(id).then(setProduct).finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;
    if (!product) return <Typography>Produto não encontrado.</Typography>;

    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
            <Button onClick={() => navigate(-1)} sx={{ mb: 2 }}>Voltar</Button>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, bgcolor: 'white', p: 2, borderRadius: 2 }}>
                <img src={product.image} alt={product.title} style={{ maxHeight: '400px', maxWidth: '100%', objectFit: 'contain' }} />
            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <Chip label={product.category} color="primary" variant="outlined" sx={{ mb: 2, textTransform: 'capitalize' }} />

                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                    {product.title}
                </Typography>

                <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 3 }}>
                    {product.price.toFixed(2)}€
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="body1" sx={{ textAlign: 'justify', color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
                    {product.description}
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    sx={{ px: 8, py: 2, borderRadius: 10 }}
                    onClick={() => addToCart(product)}
                >
                    Adicionar ao Carrinho
                </Button>
            </Box>
        </Container>
    );
};

export default ProductDetailPage;