import { useCart } from "../../../context/CartContext.jsx";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item__img" />
      <div className="cart-item__body">
        <h3>{item.title}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price}</p>
        <p>Subtotal: ${item.price * item.quantity}</p>
      </div>
      <button
        className="btn-secondary"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </article>
  );
};

export default CartItem;
