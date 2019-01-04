const userTry = Number(prompt('Please try to geuss secret number from 1 to 10'));
const secretNbr = Math.floor((Math.random() * 10 + 1));
(userTry === secretNbr) ? 
	alert(`Bingo! you are right. the secret number is ${secretNbr}`):	
  alert(`You are not correct. The secret number is ${secretNbr}`);