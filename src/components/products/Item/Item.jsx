import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-card__img"
      />
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn-secondary">
          Ver detalle
        </Link>
      </div>
    </article>
  );
};

export default Item;
