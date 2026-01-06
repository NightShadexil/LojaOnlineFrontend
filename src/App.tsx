import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { maritimeTheme, pinkTheme, darkTheme } from './theme';

const App: React.FC = () => {
  // Inicializa o estado com o valor guardado ou 0 (Marítimo) 
  const [themeIndex, setThemeIndex] = useState(() => {
    const savedTheme = localStorage.getItem("lhama-theme-index");
    return savedTheme ? parseInt(savedTheme, 10) : 0;
  });

  const themes = [maritimeTheme, pinkTheme, darkTheme];

  // Grava a preferência sempre que o tema muda 
  useEffect(() => {
    localStorage.setItem("lhama-theme-index", themeIndex.toString());
  }, [themeIndex]);

  const handleThemeChange = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        <Navbar onThemeChange={handleThemeChange} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;