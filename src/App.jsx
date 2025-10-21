import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <section id="inicio" className="section container">
          <div className="hero">
            <h1>Vela Vita</h1>
            <p>Velas artesanales con ceras vegetales, mechas de algodón y fragancias de calidad.</p>
          </div>
        </section>
        <ItemListContainer greeting="¡Bienvenido/a a Vela Vita! Descubrí aromas que cuentan historias." />
      </main>
    </>
  );
}

export default App;
