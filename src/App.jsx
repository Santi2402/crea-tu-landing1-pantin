import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import AppRouter from "./routes/AppRouter.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
