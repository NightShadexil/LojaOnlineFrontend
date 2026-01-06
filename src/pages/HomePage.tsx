import React, { useEffect, useState } from "react";
import { Container, Grid, CircularProgress, Typography, Box, Alert } from "@mui/material";
import { api } from "../services/api";
import type { Produto } from "../types";
import ProductCard from "../components/ProductCard";
import FiltroCategorias from "../components/FiltroCategorias";

const HomePage: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categoriaAtiva, setCategoriaAtiva] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const carregarProdutos = async () => {
            try {
                setLoading(true);
                const data = await api.getProducts();
                setProdutos(data);
            } catch (err) {
                setErro("Não foi possível carregar os produtos.");
            } finally {
                setLoading(false);
            }
        };
        carregarProdutos();
    }, []);

    // Lógica de filtragem no cliente
    const produtosFiltrados = categoriaAtiva
        ? produtos.filter(p => p.category === categoriaAtiva)
        : produtos;

    if (loading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress />
        </Box>
    );

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>Nossa Loja</Typography>

            {/* Componente de Filtro  */}
            <FiltroCategorias
                categoriaSelecionada={categoriaAtiva}
                onSelectCategoria={setCategoriaAtiva}
            />

            {erro && <Alert severity="error">{erro}</Alert>}

            <Grid container spacing={3}>
                {produtosFiltrados.map((produto) => (
                    <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard produto={produto} />
                    </Grid>
                ))}
            </Grid>

            {produtosFiltrados.length === 0 && !loading && (
                <Typography sx={{ mt: 4, textAlign: 'center' }}>
                    Nenhum produto encontrado nesta categoria.
                </Typography>
            )}
        </Container>
    );
};

export default HomePage;