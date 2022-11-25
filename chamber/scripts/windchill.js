// 
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#desc");
const windSpeed = document.querySelector("#windSpeed");
const url = "https://api.openweathermap.org/data/2.5/weather?q=West+Jordan&units=imperial&appid=c3d02f27c3312f72ec8e93f91fda6172";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            displayResults(data);
        } else {
            console.log(`Response not OK ${await response.text()}`);
            throw Error (await response.text());
        }
    } catch (error){
        console.log(error.message);
    }
}
// call the async function
apiFetch();

// Capitalize
// Method from Brother Blazzard. Only returns the first word with capitalization
// function capitalize(string) {
//     return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
// }

function capitalize(string) {
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}


// display the results
function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = data.wind.speed;
    const desc = capitalize(data.weather[0].description);

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Icon showing weather description currently, ${desc}`;

    captionDesc.textContent = desc;

    let t = parseFloat(currentTemp.textContent);
    let s = parseFloat(windSpeed.textContent);

    if (t >= 50 && s >= 4.8) {
        document.getElementById("windChill").innerHTML = "N/A"
    }
    else {
        const getWindChill = (t, s) => {
            return 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * (t * (s ** 0.16)))
        };
        document.getElementById("windChill").innerHTML = getWindChill(t, s).toFixed(0)
    }  ;  
};

document.getElementById("degree").innerHTML = "°F";
document.getElementById("km").innerHTML = "km/h";

