import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useCart } from "../../../context/CartContext.jsx";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <section className="section container">
      <div className="product-detail">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail__img"
        />

        <div className="product-detail__body">
          <h1>{product.title}</h1>
          <p className="product-detail__price">UYU {product.price}.00</p>
          <p>{product.description}</p>
          <p className="product-detail__stock">
            {product.stock > 0
              ? `Stock disponible: ${product.stock}`
              : "Sin stock"}
          </p>

          {product.stock === 0 && <p>Producto sin stock.</p>}

          {product.stock > 0 && !added && (
            <div className="product-detail__actions">
              <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
            </div>
          )}

          {added && (
            <div className="product-detail__actions">
              <Link to="/cart" className="btn-cart">
                Ir al carrito
              </Link>
              <Link to="/" className="btn-secondary">
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
