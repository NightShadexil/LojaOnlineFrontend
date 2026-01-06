import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Produto } from "../types";

interface ProductCardProps {
    produto: Produto;
}

const ProductCard: React.FC<ProductCardProps> = ({ produto }) => {
    const { addToCart } = useCart();

    return (
        <Card className="product-card" sx={{
            width: 280,   // Largura fixa rigorosa
            height: 420,  // Altura fixa rigorosa
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
            }
        }}>
            <CardActionArea
                component={Link}
                to={`/product/${produto.id}`}
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch'
                }}
            >
                <Box sx={{
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    bgcolor: '#fafafa'
                }}>
                    <CardMedia
                        component="img"
                        image={produto.image}
                        alt={produto.title}
                        sx={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 600,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            minHeight: '3em',
                            lineHeight: '1.5em',
                            mb: 2
                        }}
                    >
                        {produto.title}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mt: 'auto' }}>
                        {produto.price.toFixed(2)}€
                    </Typography>
                </CardContent>
            </CardActionArea>

            <Box sx={{ p: 2, pt: 0 }}>
                <Button
                    fullWidth
                    variant="contained"
                    size="medium"
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(produto);
                    }}
                >
                    Adicionar
                </Button>
            </Box>
        </Card>
    );
};

export default ProductCard;