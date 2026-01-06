import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, Box } from "@mui/material";
import { Link } from "react-router-dom";
import type { Produto } from "../types";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
    produto: Produto;
}

const ProductCard: React.FC<ProductCardProps> = ({ produto }) => {
    const { addToCart } = useCart();

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Link para a página de detalhe [cite: 15] */}
            <CardActionArea component={Link} to={`/product/${produto.id}`}>
                <CardMedia
                    component="img"
                    height="200"
                    image={produto.image}
                    alt={produto.title}
                    sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" noWrap>
                        {produto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ height: 60, overflow: 'hidden' }}>
                        {produto.description.substring(0, 100)}...
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                        {produto.price.toFixed(2)}€
                    </Typography>
                </CardContent>
            </CardActionArea>

            <Box sx={{ p: 2, pt: 0 }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                        e.preventDefault(); // Evita navegar para o detalhe ao clicar no botão
                        addToCart(produto);
                    }}
                >
                    Adicionar ao Carrinho
                </Button>
            </Box>
        </Card>
    );
};

export default ProductCard;