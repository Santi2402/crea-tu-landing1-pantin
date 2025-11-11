import React from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true); setError(null);
    getProducts(categoryId)
      .then(setItems)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section id="catalogo" className="section container">
      <div className="card" style={{marginBottom:16}}>
        <h2>{greeting}</h2>
        <p style={{marginBottom:0}}>Filtra por categoría desde el menú.</p>
      </div>

      {loading && <p>Cargando productos…</p>}
      {error && <p style={{color:"crimson"}}>Error: {error.message}</p>}
      {!loading && !error && <ItemList items={items} />}
    </section>
  );
};

export default ItemListContainer;

