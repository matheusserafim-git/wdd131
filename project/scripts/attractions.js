const attractionsData = [
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

const searchInput = document.querySelector("#search-attraction");

const sections = document.querySelectorAll(
    "#attractions-container article, .food-section, .history-section, .events-section"
);

const noResults = document.querySelector("#no-results");

searchInput.addEventListener("input", () => {

    const searchTerm = searchInput.value.toLowerCase();

    let found = false;

    sections.forEach((section) => {

        const content = section.textContent.toLowerCase();

        if (content.includes(searchTerm)) {

            section.style.display = "";
            found = true;

        } else {

            section.style.display = "none";

        }

    });

    noResults.hidden = found;

});