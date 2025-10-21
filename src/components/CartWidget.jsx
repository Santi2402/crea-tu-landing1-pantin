const CartWidget = () => {
    return (
        <button className="btn-cart" aria-label="Abrir carrito">
            {/* bolsa/carrito en SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 7V6a5 5 0 0 1 10 0v1h2a1 1 0 0 1 1 1l-1 11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3L4 8a1 1 0 0 1 1-1h2zm2 0h6V6a3 3 0 1 0-6 0v1z" />
            </svg>
            <span className="badge">0</span>
        </button>
    );
};
export default CartWidget;
