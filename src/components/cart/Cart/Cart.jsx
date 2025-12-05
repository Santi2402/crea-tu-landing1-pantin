import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import EmptyState from "../../feedback/EmptyState/EmptyState.jsx";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  if (!cart.length) {
    return (
      <EmptyState
        message="Tu carrito está vacío."
        actionLabel="Ver productos"
        actionTo="/"
      />
    );
  }

  return (
    <section className="section container">
      <h1>Tu carrito</h1>
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: ${totalPrice}</p>
        <button className="btn-secondary" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn-cart">
          Finalizar compra
        </Link>
      </div>
    </section>
  );
};

export default Cart;
