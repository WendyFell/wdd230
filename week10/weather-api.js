// 
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=c3d02f27c3312f72ec8e93f91fda6172";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing the call
            //displayResults(data);
        } else {
            console.log("Response not OK ${await response.text()}");
            throw Error (await response.text());
        }
    } catch (error){
        console.log(error.message);
    }
}

apiFetch();
console.log(data);
