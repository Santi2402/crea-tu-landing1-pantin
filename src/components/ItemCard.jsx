const ItemCard = ({ item }) => {
    return (
        <article className="card">
            <img
                src={item.image}
                alt={item.title}
                style={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    objectPosition: "bottom",   // 👈 importante
                    borderRadius: 12
                }}
            />
            <h3 style={{ margin: "8px 0 4px" }}>{item.title}</h3>
            <p style={{ margin: 0, opacity: .8 }}>${item.price}</p>
            <a className="btn-cart" href={`/product/${item.id}`} style={{ marginTop: 10, display: "inline-flex" }}>
                Ver detalle
            </a>
        </article>
    );
};
export default ItemCard;
