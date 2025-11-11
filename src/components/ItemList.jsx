import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  if (!items?.length) return <p>No hay productos para esta categoría.</p>;
  return (
    <div className="grid">
      {items.map(it => <ItemCard key={it.id} item={it} />)}
    </div>
  );
};
export default ItemList;
