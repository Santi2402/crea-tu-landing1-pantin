import { useState } from "react";
import { useCart } from "../../../context/CartContext.jsx";
import { createOrder } from "../../../services/ordersService.js";
import EmptyState from "../../feedback/EmptyState/EmptyState.jsx";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  if (!cart.length && !orderId) {
    return (
      <EmptyState
        message="Todavía no agregaste productos al carrito."
        actionLabel="Volver al catálogo"
        actionTo="/"
      />
    );
  }

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const orderData = {
        buyer,
        items: cart.map(({ id, title, price, quantity }) => ({
          id,
          title,
          price,
          quantity,
        })),
        total: totalPrice,
      };

      const id = await createOrder(orderData);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      setError("Hubo un error al generar tu orden. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <section className="section container">
        <div className="card">
          <h1>¡Gracias por tu compra!</h1>
          <p>Guardá este identificador para cualquier consulta:</p>
          <p className="order-id">ID de orden: {orderId}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section container">
      <div className="card checkout">
        <h1>Finalizar compra</h1>
        <p>Total a pagar: ${totalPrice}</p>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Nombre completo
            <input
              type="text"
              name="name"
              value={buyer.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={buyer.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Teléfono
            <input
              type="tel"
              name="phone"
              value={buyer.phone}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn-cart" disabled={loading}>
            {loading ? "Generando orden..." : "Confirmar compra"}
          </button>

          {error && <p className="form-error">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
