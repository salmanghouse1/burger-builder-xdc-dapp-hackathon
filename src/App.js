import logo from "./logo.svg";
import { React, useState } from "react";
import "./App.css";

function App() {
  const [salad, setSalad] = useState(1);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(1);
  const [meat, setMeat] = useState(1);

  let renderedSalad = [];

  let renderedMeat = [];
  let renderedCheese = [];
  let renderedBacon = [];
  let totalSalad = salad * 0.35;
  let totalMeat = meat * 1.25;
  let totalBacon = bacon * 0.45;
  let totalCheese = cheese * 1.55;
  let total = totalSalad + totalMeat + totalBacon + totalCheese;

  // const next = () => {
  //   console.log('next');
  // };
  for (let i = 1; i <= salad; i++) {
    renderedSalad.push(<div class="salad"></div>);
  }
  for (let i = 1; i <= bacon; i++) {
    renderedBacon.push(<div class="bacon"></div>);
  }

  for (let i = 1; i <= cheese; i++) {
    renderedCheese.push(<div class="cheese"></div>);
  }
  for (let i = 1; i <= meat; i++) {
    renderedMeat.push(<div class="meat"></div>);
  }

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

          {renderedSalad}
          {renderedBacon}
          {renderedCheese}
          {renderedMeat}
          <div class="bread-bottom"></div>
        </div>
        <div>
          <form class="burgerForm">
            <h2>Add Your Toppings</h2>
            <label>Salad</label>
            <input
              type="number"
              value={salad}
              onChange={(e) => {
                setSalad(e.target.value);
              }}
              max="3"
            />
            <label>Bacon</label>
            <input
              type="number"
              max="3"
              value={bacon}
              onChange={(e) => {
                setBacon(e.target.value);
              }}
            />
            <label>Cheese</label>
            <input
              type="number"
              max="3"
              value={cheese}
              onChange={(e) => {
                setCheese(e.target.value);
              }}
            />
            <label>Meat</label>
            <input
              value={meat}
              onChange={(e) => {
                setMeat(e.target.value);
              }}
              type="number"
              max="4"
            />
            <p>
              <table class="GeneratedTable">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Salad:</td>
                    <td>{totalSalad}</td>
                  </tr>
                  <tr>
                    <td>Meat</td>
                    <td>{totalMeat}</td>
                  </tr>
                  <tr>
                    <td>Cheese</td>
                    <td>{totalCheese}</td>
                  </tr>
                  <tr>
                    <td>Bacon</td>
                    <td>{totalBacon}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>${total}</td>
                  </tr>
                  <tr>
                    <td>Cost</td>
                    <td style={{ fontWeight: "bold" }}>
                      Rounded:${Math.ceil(total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
            <button type="submit">Order</button>
            <p>Dont have XDC? Swap Eth for XDC now.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
