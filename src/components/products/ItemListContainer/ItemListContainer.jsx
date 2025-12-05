import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import Loader from "../../Loader/Loader.jsx";
import EmptyState from "../../feedback/EmptyState/EmptyState.jsx";
import {
  getProducts,
  getProductsByCategory,
} from "../../../services/productsService.js";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Hubo un problema al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) return <Loader />;

  if (error) return <EmptyState message={error} />;

  if (!products.length) {
    return (
      <EmptyState
        message="No encontramos productos para esta categoría."
        actionLabel="Ver todos los productos"
        actionTo="/"
      />
    );
  }

  return (
    <section className="section container">
      {greeting && <h1>{greeting}</h1>}
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
