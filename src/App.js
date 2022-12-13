import logo from "./logo.svg";
import "./App.css";

function App() {
  const [salad, setSalad] = useState(1);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(1);
  const [meat, setMeat] = useState(1);
  return (
    <div className="App">
      <header className="App-header"></header>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        <div class="box">
          <h1 style={{ textAlign: "center" }}>Burger Builder</h1>

          <div class="bread-top">
            <div class="seeds"></div>
            <div class="seeds2"></div>
          </div>
          <div class="salad"></div>
          <div class="salad"></div>
          <div class="bacon"></div>
          <div class="cheese"></div>
          <div class="cheese"></div>
          <div class="meat"></div>
          <div class="meat"></div>
          <div class="bread-bottom"></div>
        </div>
        <div>
          <form class="burgerForm">
            <h2>Add Your Toppings</h2>
            <label>Salad</label>
            <input type="number" max="3" />
            <label>Bacon</label>
            <input type="number" max="3" />

            <label>Cheese</label>
            <input type="number" max="3" />

            <label>Meat</label>
            <input type="number" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
