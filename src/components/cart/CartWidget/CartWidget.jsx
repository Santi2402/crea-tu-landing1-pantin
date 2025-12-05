import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext.jsx";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  if (!totalQuantity || totalQuantity === 0) return null;

  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-widget__icon">🛒</span>
      <span className="cart-widget__badge">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
