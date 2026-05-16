const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.textContent = "☰";

hamButton.addEventListener('click', () => {

	navigation.classList.toggle('open');

	if (navigation.classList.contains('open')) {
		hamButton.textContent = "✖";
	} else {
		hamButton.textContent = "☰";
	}
});

document.querySelector('#currentyear').textContent =
	new Date().getFullYear();

document.querySelector('#lastModified').textContent =
	`Last Modified: ${document.lastModified}`;