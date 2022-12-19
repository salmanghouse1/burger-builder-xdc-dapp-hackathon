pragma solidity >=0.7.0 <0.9.0;

// import "./BurgerToken";

contract BurgerMachine {
    // constructor() ERC20("BurgerToken", "BTK") {
    //     _mint(msg.sender, 50000 * 10**decimals());
    // }

    // state variables
    address public owner;
    mapping(address => uint256) public burgerBalances;
    address private recipient;

    // set the owner as th address that deployed the contract
    // set the initial vending machine balance to 100
    constructor() {
        owner = msg.sender;
        recipient = "xdc52ba7b301af447f5cd19edc823c0b4be9a6c23f6";
        burgerBalances[address(this)] = 100;
        amount = importedAmountFromReact;
    }

    function getVendingMachineBalance() public view returns (uint256) {
        return burgerBalances[address(this)];
    }

    // Let the owner restock the vending machine
    function restock(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can restock.");
        burgerBalances[address(this)] += amount;
    }

    // Purchase donuts from the vending machine
    function transfer(address recipient, uint256 amount) public payable {
        require(
            msg.value >= amount * 1,
            "You must pay at least 1 Burger Token"
        );
        require(
            burgerBalances[address(this)] >= amount,
            "Not enough burger in stock to complete this purchase"
        );
        burgerBalances[address(this)] -= amount;
        burgerBalances[msg.sender] += amount;
    }
}
