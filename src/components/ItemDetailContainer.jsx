import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true); setError(null);
        getProductById(id)
            .then(setItem)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [id]);

    const handleAdd = (qty) => {
        console.log(`Agregar al carrito: ${qty} × ${item?.title} (${item?.id})`);
    };

    return (
        <section className="section container">
            {loading && <p>Cargando producto…</p>}
            {error && <p style={{ color: "crimson" }}>Error: {error.message}</p>}
            {!loading && !error && item && <ItemDetail item={item} onAdd={handleAdd} />}
        </section>
    );
};

export default ItemDetailContainer;
