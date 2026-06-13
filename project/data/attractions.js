const attractions = [
    {
        id: "redencao",
        name: "Redenção Park"
    },
    {
        id: "gasometro",
        name: "Usina do Gasômetro"
    },
    {
        id: "ibere",
        name: "Iberê Camargo Museum"
    }
];

const searchInput =
document.querySelector("#search-attraction");

const attractions =
document.querySelectorAll("#attractions-container article");

searchInput.addEventListener("input", () => {

    const searchTerm =
    searchInput.value.toLowerCase();

    attractions.forEach(attraction => {

        const title =
        attraction.querySelector("h2")
        .textContent
        .toLowerCase();

        if (title.includes(searchTerm)) {
            attraction.style.display = "block";
        }
        else {
            attraction.style.display = "none";
        }

    });

});