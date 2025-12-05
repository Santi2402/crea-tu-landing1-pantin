import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader.jsx";
import EmptyState from "../../feedback/EmptyState/EmptyState.jsx";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { getProductById } from "../../../services/productsService.js";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("No pudimos cargar este producto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;

  if (error)
    return (
      <EmptyState
        message={error}
        actionLabel="Volver al inicio"
        actionTo="/"
      />
    );

  if (!product)
    return (
      <EmptyState
        message="Producto no encontrado."
        actionLabel="Volver al catálogo"
        actionTo="/"
      />
    );

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
