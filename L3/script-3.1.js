const AGE_LIMIT = 18;
const AGE_LIMIT_ALT = 12;
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const userYearOfBirth = prompt('Please advise your Year Of Birth:');
const userAge = userYearOfBirth === null ? 
								null :
                currentYear - Number(userYearOfBirth);

if (Number.isNaN(userAge)) {
	alert('You have inserted incorrect value.');
} else if (userAge === null) {
	alert('Bye!');
} else if (userAge < AGE_LIMIT_ALT) {
	alert('Access is denied');
} else if (userAge >= AGE_LIMIT_ALT && userAge < AGE_LIMIT) {
	alert('Would like to recommend the following link: www.recommend.com')
} else {
	alert('Access is allowed');
} 
