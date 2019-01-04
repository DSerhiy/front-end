const usdRate = 27.6;
const userNmr = prompt(`The basic currency is USD, pls input sum in local currency to convert to USD:`);
alert(`Today curRate is 27.6, thus you have ${Math.floor(userNmr / usdRate * 100) / 100} USD`);