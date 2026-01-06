import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* O CartProvider envolve o App para gerir o carrinho globalmente */}
      <CartProvider>
        {/* O ThemeProvider e o CssBaseline foram movidos para dentro do App.tsx 
           para permitir a troca dinâmica entre os temas marítimo, rosa e dark.
        */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);