import React from "react";

const ItemCount = ({ stock = 0, onAdd }) => {
    const [qty, setQty] = React.useState(1);
    return (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="btn-cart" onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
            <span>{qty}</span>
            <button className="btn-cart" onClick={() => setQty(q => Math.min(stock, q + 1))}>+</button>
            <button className="btn-cart" onClick={() => onAdd?.(qty)}>Agregar al carrito</button>
        </div>
    );
};

const ItemDetail = ({ item, onAdd }) => {
    if (!item) return null;
    return (
        <div className="card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <img
                src={item.image}
                alt={item.title}
                style={{
                    width: "100%",
                    height: 340,
                    objectFit: "cover",
                    objectPosition: "bottom",   // 👈 importante
                    borderRadius: 12
                }}
            />
            <div>
                <h2>{item.title}</h2>
                <p style={{ opacity: .85 }}>{item.description}</p>
                <p style={{ fontWeight: 600, fontSize: 18 }}>${item.price}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
