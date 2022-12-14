import logo from "./logo.svg";
import { React, useState } from "react";
import "./App.css";
// import web3 from "./web3";

function App() {
  // uncomment for metamask
  // let web3 = new Web3(window.ethereum);

  const [error, setError] = useState("");

  const connectWalletHandler = async () => {
    // alert("Connect Wallet");
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Will Implement XDC WALLET
      } catch (err) {
        setError(err.message);
      }
    } else {
      console.log("Please Install Metamask");
    }
  };
  // const connectedContract = new ethers.Contract(
  //   process.env.SMART_CONTRACT_ADDRESS,
  //   escrowAbi.abi,
  //   signer
  // );

  // function bellow to send frontend variable total amount to smart contract

  function sendAmountOrder(total) {
    console.log(total);
    // bellow code uncomment later to connect to smartcontract
    // let owedAmount = await contract.getOwedAmount();
    // owedAmount=owedAmount.toString()
    // let transaction=await connectedContract.depositEth({value:total})
    // await transaction.wait();
  }

  const [salad, setSalad] = useState(1);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(1);
  const [meat, setMeat] = useState(1);

  let renderedSalad = [];
  // let total = totalSalad + totalMeat + totalBacon + totalCheese;
  let renderedMeat = [];
  let renderedCheese = [];
  let renderedBacon = [];
  let totalSalad = salad * 0.35;
  let totalMeat = meat * 1.25;
  let totalBacon = bacon * 0.45;
  let totalCheese = cheese * 1.55;
  const [total, setTotal] = useState(
    totalSalad + totalMeat + totalBacon + totalCheese
  );

  // const next = () => {
  //   console.log('next');
  // };
  for (let i = 1; i <= salad; i++) {
    renderedSalad.push(<div className="salad"></div>);
  }
  for (let i = 1; i <= bacon; i++) {
    renderedBacon.push(<div className="bacon"></div>);
  }

  for (let i = 1; i <= cheese; i++) {
    renderedCheese.push(<div className="cheese"></div>);
  }
  for (let i = 1; i <= meat; i++) {
    renderedMeat.push(<div className="meat"></div>);
  }

  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <button onClick={connectWalletHandler}></button>
        <p style={{ color: "red" }}>{error}</p>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        <div className="box">
          <h1 style={{ textAlign: "center" }}>Burger Builder</h1>

          <div className="bread-top">
            <div className="seeds"></div>
            <div className="seeds2"></div>
          </div>

          {renderedSalad}
          {renderedBacon}
          {renderedCheese}
          {renderedMeat}
          <div className="bread-bottom"></div>
        </div>
        <div>
          <form className="burgerForm">
            <h2>Add Your Toppings</h2>
            <label>Salad</label>
            <input
              type="number"
              value={salad}
              onChange={(e) => {
                setSalad(e.target.value);
                setTotal(totalSalad + totalMeat + totalBacon + totalCheese);
              }}
              max="3"
              min="0"
            />
            <label>Bacon</label>
            <input
              type="number"
              max="3"
              min="0"
              value={bacon}
              onChange={(e) => {
                setBacon(e.target.value);
                setTotal(totalSalad + totalMeat + totalBacon + totalCheese);
              }}
            />
            <label>Cheese</label>
            <input
              type="number"
              max="3"
              min="0"
              value={cheese}
              onChange={(e) => {
                setCheese(e.target.value);
                setTotal(totalSalad + totalMeat + totalBacon + totalCheese);

                // setTotal(totalSalad + totalMeat + totalBacon + totalCheese);
              }}
            />
            <label>Beef Patty</label>
            <input
              value={meat}
              onChange={(e) => {
                setMeat(e.target.value);
                setTotal(totalSalad + totalMeat + totalBacon + totalCheese);

                // setTotal(totalSalad + totalMeat + totalBacon + totalCheese);
              }}
              type="number"
              max="4"
              min="0"
            />
            <p>
              <table className="GeneratedTable">
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
            <button type="submit" onClick={sendAmountOrder(total)}>
              Order
            </button>
            <p>Dont have XDC? Swap Eth for XDC now.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
