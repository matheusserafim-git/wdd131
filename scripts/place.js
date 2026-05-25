const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 25;
const windSpeed = 10;

function calculationWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

const windChill = document.querySelector("#windChill");
if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `Wind Chill: ${calculationWindChill(temperature, windSpeed)} °C`;
}
else {
    windChill.textContent = "Wind Chill: N/A";
}