import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import SuccessPage from "./pages/SuccessPage";
import { maritimeTheme, pinkTheme, darkTheme } from './theme';

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(() => {
    const savedTheme = localStorage.getItem("lhama-theme-index");
    return savedTheme ? parseInt(savedTheme, 10) : 0;
  });

  const themes = [maritimeTheme, pinkTheme, darkTheme];

  useEffect(() => {
    localStorage.setItem("lhama-theme-index", themeIndex.toString());
  }, [themeIndex]);

  const handleThemeChange = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        bgcolor: 'background.default',
        position: 'relative',
        zIndex: 1
      }}>
        <Navbar onThemeChange={handleThemeChange} />
        {/* O flexGrow garante que o main ocupa o espaço disponível e centra o conteúdo verticalmente se necessário */}
        <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;