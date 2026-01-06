import type { Produto } from "../types";

const BASE_URL = "https://fakestoreapi.com";

export const api = {
    // Listagem de produtos
    getProducts: async (): Promise<Produto[]> => {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) throw new Error("Erro ao carregar produtos");
        return response.json();
    },

    // Detalhe do produto
    getProduct: async (id: string): Promise<Produto> => {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error("Produto não encontrado");
        return response.json();
    },

    // Filtro por categoria
    getCategories: async (): Promise<string[]> => {
        const response = await fetch(`${BASE_URL}/products/categories`);
        if (!response.ok) throw new Error("Erro ao carregar categorias");
        return response.json();
    }
};