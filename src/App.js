import carmen from "./carmen.svg";
import Slider from "./Slider";
import "./sass/App.css";

function App() {
  return (
    <div>
      <header className="flex">
        <img src={carmen} />
        <h3>.react | sass.</h3>
      </header>
      <main>
        <br />
        <h1>Reviews</h1>
        <br />
        <Slider />
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
