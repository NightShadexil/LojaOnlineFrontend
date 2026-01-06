import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import FiltroCategorias from "../components/FiltroCategorias";
import { api } from "../services/api";
import type { Produto } from "../types";
import ProductCard from "../components/ProductCard";

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Produto[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await api.getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesCategory = categoriaSelecionada === "" || product.category === categoriaSelecionada;
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <Container maxWidth={false} sx={{ py: 2, px: 2 }}>
            <Box sx={{ maxWidth: 1200, margin: '0 auto', mb: 4 }}>
                <Typography variant="subtitle2" gutterBottom color="text.secondary" sx={{ mb: 1 }}>
                    Pesquisar por nome ou descrição
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Typography variant="subtitle2" gutterBottom color="text.secondary" sx={{ mb: 1 }}>
                    Filtrar por Categoria
                </Typography>
                <FiltroCategorias
                    categoriaSelecionada={categoriaSelecionada}
                    onSelectCategoria={setCategoriaSelecionada}
                />
            </Box>

            <Grid
                container
                spacing={3}
                sx={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    width: '100%',
                    justifyContent: {
                        xs: 'center', // < 600px: Esquerda
                        sm: 'center',     // 600px - 900px: Centro
                        md: 'center',     // 900px - 1200px: Centro
                        lg: 'flex-start'  // > 1200px: Esquerda
                    }
                }}
            >
                {filteredProducts.map((product) => (
                    <Grid
                        item
                        key={product.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', sm: 'flex-start' },
                        }}
                    >
                        <ProductCard produto={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;