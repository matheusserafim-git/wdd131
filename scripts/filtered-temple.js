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

const container = document.querySelector('.container');

function displayTemples(temples) {
  container.innerHTML = '';

  temples.forEach(temple => {
	const card = document.createElement('section');
	const name = document.createElement('h2');
	const location = document.createElement('p');
	const dedicated = document.createElement('p');
	const area = document.createElement('p');
	const image = document.createElement('img');

	name.textContent = temple.templeName;
	location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
	dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
	area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
	image.src = temple.imageUrl;
	image.alt = temple.templeName;
	image.loading = 'lazy';

	card.appendChild(name);
	card.appendChild(location);
	card.appendChild(dedicated);
	card.appendChild(area);
	card.appendChild(image);
	container.appendChild(card);
  });
}



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "San Diego California",
	location: "San Diego, California, United States",
	dedicated: "1993, April, 30",
	area: 72000,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-66899.jpg"
  },
  {
	templeName: "Rio de Janeiro Brazil",
	location: "Rio de Janeiro, Brazil",
	dedicated: "2022, abril, 30",
	area: 29966,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8162.jpg"
  },
  {
	templeName: "Sapporo Japan",
	location: "Sapporo, Japan",
	dedicated: "2016, august, 26",
	area: 48480,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374.jpg"
  }
];

function getYear(temple) {
    return parseInt(temple.dedicated.match(/\d{4}/)[0]);
}

document.querySelector('#home').addEventListener('click', (event) => {
	event.preventDefault();
	document.querySelector('h1').textContent = "Home";
	displayTemples(temples);
});

document.querySelector('#old').addEventListener('click', (event) => {
	event.preventDefault();
	document.querySelector('h1').textContent = "Old Temples";
	const oldTemples = temples.filter(temple => 
		getYear(temple) < 1900
	);
	displayTemples(oldTemples);
});

document.querySelector('#new').addEventListener('click', (event) => {
	event.preventDefault();
    document.querySelector('h1').textContent = 'New Temples';

    const newTemples = temples.filter(temple =>
        getYear(temple) > 2000
    );

    displayTemples(newTemples);
});

document.querySelector('#large').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('h1').textContent = 'Large Temples';

    const largeTemples = temples.filter(temple =>
        temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.querySelector('#small').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('h1').textContent = 'Small Temples';

    document.querySelector('h1').textContent = 'Small Temples';

    const smallTemples = temples.filter(temple =>
        temple.area < 10000
    );

    displayTemples(smallTemples);
});


displayTemples(temples);