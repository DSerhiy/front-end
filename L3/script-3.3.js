const USD = 'usd',
		      EUR = 'eur',
          GBT = 'gbt',
          RUB = 'rub',
          JPY = 'jpy';

 const CANCEL = null;

const usdRate = 27.51;
const eurRate = 31.36;
const gbtRate = 34.60;
const rubRate = 0.35;
const jpyRate = 0.23;

let userCurrency = prompt(
	'Please choose your currency to exchage to local one (UAH):\n' + 
  'USD\n' + 
  'EUR\n' + 
  'GBT\n' + 
  'RUB\n' + 
  'JPY\n');
  
if (userCurrency === CANCEL) alert('Bye!');
else {
	userCurrency = userCurrency.toLowerCase();
  
  if ( userCurrency != USD &&
  		 userCurrency != EUR &&
  		 userCurrency != GBT &&
  		 userCurrency != RUB &&
  		 userCurrency != JPY) alert('Your currency is not supported.');
	else {	  
	  let userAmount = prompt('Please insert amount to exchange:');
	  
	  if (userAmount === CANCEL) alert('Bye!');  
	  else  {
	    userAmount = Number(userAmount);
	    
	    if (Number.isNaN(userAmount)) alert('A number should be inserted!');
	    else {
	      switch (userCurrency) {
	        case USD:
	          alert(
	          `curRate: ${usdRate}\n` + 
	          `USD: ${userAmount} =>\n` + 
	          `UAH: ${Math.floor(userAmount * usdRate * 100) / 100}`);	
	          break;
	        case EUR:
	          alert(
	            `curRate: ${eurRate}\n` + 
	            `EUR: ${userAmount} =>\n` + 
	            `UAH: ${Math.floor(userAmount * eurRate * 100) / 100}`);	
	          break;
	        case GBT:
	          alert(
	            `curRate: ${gbtRate}\n` + 
	            `GBT: ${userAmount} =>\n` + 
	            `UAH: ${Math.floor(userAmount * gbtRate * 100) / 100}`);	
	          break;
	        case RUB:
	          alert(
	            `curRate: ${rubRate}\n` + 
	            `RUB: ${userAmount} =>\n` + 
	            `UAH: ${Math.floor(userAmount * rubRate * 100) / 100}`);	
	          break;
	        case JPY:
	          alert(
	            `curRate: ${jpyRate}\n` + 
	            `JPY: ${userAmount} =>\n` + 
	            `UAH: ${Math.floor(userAmount * jpyRate * 100) / 100}`);	
	          break;        
	      }
	 		} 
	  }  
	}  
}
