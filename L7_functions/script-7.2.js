(function() {
  const EXIT = null;

  while (confirm(
   'Here You can exchange following currencies:\n' + 
   'UAH, USD, EUR, GBP, RUB, JPY.\n' + 
   'Press OK to proceed further or CANCEL to exit.')) {
  
    const initialCur = prompt(
      'Insert your currency of the following:\n' + 
      'UAH, USD, EUR, GBP, RUB, JPY.');
        
    if(initialCur === EXIT) 
      break;

    const askedCur = prompt(
      'Insert asked currency of the following:\n' + 
      'UAH, USD, EUR, GBP, RUB, JPY.');
    
    if(askedCur === EXIT) 
      break;

    const amount = getUserNumber('Indicate amount that to be exchanged:');
    
    if(amount === EXIT) 
      break;

    const result = exchange(initialCur, askedCur, amount);

    if(result === undefined) {
      alert('You have inserted unsupported currency.');
      continue;
    }

    showResult(result, initialCur, askedCur, amount);
  }   
})();

// ===============
// usded functions

function exchange(from, to, amount) {
  const ROEData = {
    uah: {
      uah: 1.000,
      usd: 0.035,
      eur: 0.031,
      gbp: 0.027,
      rub: 2.366,
      jpy: 3.926 
    },
    usd: {
      usd:   1.00,
      uah:  27.95,
      eur:   0.88,
      gbp:   0.77,
      rub:  66.17,
      jpy: 109.77 
    },
    eur: {
      eur:   1.00,
      uah:  31.79,
      usd:   1.13,
      gbp:   0.88,
      rub:  75.25,
      jpy: 124.83 
    },
    gbp: {
      gbp:   1.00,
      uah:  36.01,
      usd:   1.28,
      eur:   1.13,
      rub:  85.24,
      jpy: 141.41 
    },
    jpy: {
      jpy: 1.000,
      uah: 0.254,
      usd: 0.009,
      eur: 0.008,
      gbp: 0.007,
      rub: 0.602 
    },
    rub: {
      rub: 1.000,
      uah: 0.422,
      usd: 0.015,
      eur: 0.013,
      gbp: 0.012,
      jpy: 1.65 
    }
  }

  if (!ROEData.hasOwnProperty(from) && !ROEData[from].hasOwnProperty(to))
    return undefined;
    
  return Math.round(amount * ROEData[from][to] * 100) / 100;
}

// ------------------------------

function getUserNumber(question) {
  let num = prompt(question);
  
  if(num === null)
    return null;
  
  while(Number.isNaN(+num)) {       
    num = prompt('pls insert numeric value!');
    if(num === null)
      return null;
  } 

  return +num;
}

// ------------------------------

function showResult(result, initialCur, askedCur, amount) {
  alert(
    `ROE: ${result / amount}\n` + 
    `${amount} ${initialCur} -> ${result} ${askedCur}`);
}

