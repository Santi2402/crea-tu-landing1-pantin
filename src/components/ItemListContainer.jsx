import vela1 from "../assets/vela-01.jpg";
import vela2 from "../assets/vela-02.jpg";
import vela3 from "../assets/vela-03.jpg";

const ItemListContainer = ({ greeting }) => {
    return (
        <section id="catalogo" className="section container">
            <div className="card">
                <h2>{greeting}</h2>
                <p style={{ marginBottom: 12 }}>
                    Muy pronto encontrarás aquí nuestro catálogo de velas de soja, blends exclusivos y ediciones limitadas.
                </p>

                {/* Galería visual de 3 productos (placeholder, no funcional) */}
                <div className="grid" style={{ marginTop: 12 }}>
                    <img src={vela1} alt="Vela Vela Vita - estilo arco" />
                    <img src={vela2} alt="Vela Vela Vita - poliedro" />
                    <img src={vela3} alt="Vela Vela Vita - copa con tapa" />
                </div>
            </div>
        </section>
    );
};

export default ItemListContainer;
