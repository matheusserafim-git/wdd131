const container =
document.querySelector("#attraction-container");

async function loadAttractions() {

    const response =
    await fetch("data/attractions.json");

    const attractions =
    await response.json();

    displayAttractions(attractions);
}

function displayAttractions(attractions) {

    attractions.forEach(place => {

        const card =
        document.createElement("section");

        card.innerHTML = `
            <h3>${place.name}</h3>
            <p>${place.type}</p>
            <img
                src="${place.image}"
                alt="${place.name}"
                loading="lazy">
            <button>
                Favorite
            </button>
        `;

        const button =
        card.querySelector("button");

        button.addEventListener(
            "click",
            () => saveFavorite(place.name)
        );

        container.appendChild(card);
    });
}

function saveFavorite(place) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    favorites.push(place);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}

if (container) {
    loadAttractions();
}

const menuButton =
document.querySelector("#menu-button");
const navigation =
document.querySelector("nav");
menuButton.addEventListener(
    "click",
    () => {navigation.classList.toggle("open")

    if (navigation.classList.contains("open")) 
        {menuButton.textContent = "✖";} 
    else {
        menuButton.textContent = "☰";
    }
});

const exploreBtn = document.querySelector("#explore-btn");

exploreBtn.addEventListener("click", () => {

    localStorage.setItem("lastAction", "explorePlaces");
    document.querySelector(".featured")
        .scrollIntoView({
            behavior: "smooth"
        });

});

const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

const apiKey = "9ef3c63ad38c1a7b6e9ce1ece59269c8";

const url = `https://api.openweathermap.org/data/2.5/weather?q=Porto Alegre,BR&units=metric&lang=pt_br&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

getWeather();

setInterval(getWeather, 10 * 60 * 1000);