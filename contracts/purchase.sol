pragma solidity >=0.7.0 <0.9.0;



contract PurchaseBurger{

uint total
address admin
address sender
uint saladPrice
uint cheesePrice
uint meatPrice
uint baconPrice
uint qty


function private addCheese(uint cheesePrice,uint qty){

uint totalCheeseCost=cheesePrice*qty;
    return totalCheeseCost;
}

function private addMeat(uint meatPrice,uint qty){

uint totalMeatCost=meatPrice*qty;
    return totalMeatCost;
}


function private addBacon(uint baconPrice,uint qty){

uint totalBaconCost=baconPrice*qty;
    return totalBaconCost;
}


function private addSalad(uint saladPrice,uint qty){
    
qty>3 || qty<0 ? uint totalSaladCost=saladPrice*3; : uint totalSaladCost=saladPrice*qty;
return totalSaladCost;
}

function private total(totalSaladCost,totalBaconCost,totalCheeseCost,totalMeatCost){
uint totalToPay=totalSaladCost+totalMeatCost+totalCheeseCost+totalBaconCost;
return totalToPay;
}

function pay payable(address admin,address sender,totalToPay){

}







}