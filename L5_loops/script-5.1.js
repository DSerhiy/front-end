while (confirm('Would you like to play the game -  "Guess the number"?')) {
  
  const secretNum = Math.floor((Math.random() * 10 + 1));
  let userAttempt = prompt('Please try to geuss secret number from 1 to 10');
  
  while (userAttempt !== null && Number(userAttempt) !== secretNum)     
    userAttempt = prompt(`Unfortunately, it is not ${userAttempt}. Pls try one more time.`);
  
  if (Number(userAttempt) === secretNum)  
    alert(`Bingo! You are right. The secret number is ${secretNum}`);
}