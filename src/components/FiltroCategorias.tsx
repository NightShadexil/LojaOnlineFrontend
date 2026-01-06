import React, { useEffect, useState } from "react";
import { Box, Chip, Typography, Skeleton } from "@mui/material";
import { api } from "../services/api";

interface FiltroCategoriasProps {
    categoriaSelecionada: string;
    onSelectCategoria: (categoria: string) => void;
}

const FiltroCategorias: React.FC<FiltroCategoriasProps> = ({ categoriaSelecionada, onSelectCategoria }) => {
    const [categorias, setCategorias] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getCategories()
            .then(setCategorias)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return (
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            {[1, 2, 3, 4].map((n) => <Skeleton key={n} width={100} height={40} />)}
        </Box>
    );

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
                Filtrar por Categoria
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                    label="Todos"
                    clickable
                    color={categoriaSelecionada === "" ? "primary" : "default"}
                    onClick={() => onSelectCategoria("")}
                />
                {categorias.map((cat) => (
                    <Chip
                        key={cat}
                        label={cat}
                        clickable
                        sx={{ textTransform: 'capitalize' }}
                        color={categoriaSelecionada === cat ? "primary" : "default"}
                        onClick={() => onSelectCategoria(cat)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default FiltroCategorias;