const MIN_AGE = 30,
			     MIN_EXPERIENCE = 2,
			     CANCEL = null;

let userAge = prompt('Please insert your age.');

if (userAge === CANCEL) alert('Bye!!!');
else {
	userAge = Number(userAge);
  
  if (Number.isNaN(userAge)) alert('The age should be inserted as a number.');
  else if (userAge < MIN_AGE ) alert('Unfortunately, the min age for this position is 30 years.');
  else {
  	let userExperience = prompt('Please insert your experience in years.');
    
    if (userExperience === CANCEL) alert('Bye!!!');
    else {
    	userExperience = Number(userExperience);
      
      if (Number.isNaN(userExperience)) alert('The experience should be inserted as number of years working in IT.');
  		else if (userExperience < MIN_EXPERIENCE ) alert('Unfortunately, the min experience for this position is 2 years.');
      else alert('Thanks for your answers, we invite you for interview.')      
    }
  }
}


  
  
  
  