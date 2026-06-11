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