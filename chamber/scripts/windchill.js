
const tempFahr = document.querySelector('#tempFahr');
const windSpeed = document.querySelector("#windSpeed");

let t = parseFloat(tempFahr.textContent)
let s = parseFloat(windSpeed.textContent)

if (t >= 50 && s >= 4.8) {
    document.getElementById("windChill").innerHTML = "N/A"
}

else {
    const getWindChill = (t, s) => {
        return 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * (t * (s ** 0.16)))
    }

    document.getElementById("windChill").innerHTML = getWindChill(t, s)
}

document.getElementById("degree").innerHTML = "°F"
document.getElementById("km").innerHTML = "km/h"