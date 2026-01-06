import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { maritimeTheme, pinkTheme, darkTheme } from './theme';

const App: React.FC = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes = [maritimeTheme, pinkTheme, darkTheme];

  useEffect(() => {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = '/Lhama_Atómica_icone.png';
    document.getElementsByTagName('head')[0].appendChild(link);
    document.documentElement.style.overflowY = 'scroll';
  }, []);

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
        width: '100%'
      }}>
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