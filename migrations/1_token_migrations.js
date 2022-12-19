const { artifacts } = require("truffle");

const XRC20Token = artifacts.require("XRC20Token");

// const BTK = artifacts.require("BurgerToken");

// const NAME = "BurgerToken";
// const SYMBOL = "BTK";
// const DECIMALS = 18;
// const INITIAL_SUPPLY = 1000;

// module.exports = function (deployer) {
// deployer.deploy(XRC20Token, NAME, SYMBOL, DECIMALS, INITIAL_SUPPLY).then(()=>{
// deployer.deploy(BTK)}).then(() => deployer.deploy(BTK, BTK.address))

// };

// module.exports = function (deployer) {
//     .then(() => deployer.deploy(Faucet, EGT.address));
// };

const purchase = artificats.require("VendingMachine");

module.exports = function (deployer) {
  deployer.deploy(purchase);
};
