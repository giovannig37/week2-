//declared variables 

var isHotOutSide = true;
var isWeekday = false;
var hasMoneyInPocket = true;
var costOfMilk = 10;
var moneyInWallet = 80;
var thirstLevel = 5; 
var willGoSwimming = true;
var isAGoodDay = true;

//created conditions and variable if statements
if(isHotOutSide && hasMoneyInPocket)
{
    shouldBuyIcecream= true;
}

if(isHotOutSide && isWeekday)
{
    willGoSwimming= true;
}

if(isHotOutSide && hasMoneyInPocket && isWeekday)
{
    isAGoodDay= true;
}

if(isHotOutSide && (thirstLevel >= 3) && (moneyInWallet >= costOfMilk * 2))
{
    willBuyMilk= true;
} 

console.log(shouldBuyIcecream);

console.log(willGoSwimming);

console.log(isAGoodDay);

console.log(willBuyMilk); 
