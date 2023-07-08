const main = document.body.querySelectorAll('.active');

const success = document.body.querySelector('.hidden');

const submitButton = document.body.querySelector('.submit');

let emailInput = document.body.querySelector('#email');

console.log(main, success, submitButton, emailInput);

const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const warning = document.createElement('p');

	warning.classList.add('warning');

	warning.textContent = 'Please enter a valid email address.';

	emailInput.parentNode.insertBefore(warning, emailInput);
	
warning.style.display = 'none';

function validateEmail() {
	
	if (emailValidation.test(emailInput.value)) {
		
		warning.style.display = 'none';

		console.log(warning);

		return true;

	} else {

		warning.style.display = 'block';

		return false;
	}
}

submitButton.addEventListener('click', (event) => {
	event.preventDefault();

	if (validateEmail()) {
		
		main.forEach((element) => {

			console.log(element);

			if (element.classList.contains('active')) {
				
				element.classList.remove('active');

				element.classList.add('hidden');
			
			} else {
				
				element.classList.remove('hidden');

				element.classList.add('active');

			}
		});

		if (success.classList.contains('hidden')) {
			
			success.classList.remove('hidden');

			success.classList.add('active');

		} else {
			success.classList.remove('active');

			success.classList.add('hidden');
		}
	}
});