const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();        
    })
    .then (function (jsonObject) {
        console.table(jsonObject); //temporarily checking for a valid response and data parsing
        const prophets = jsonObject["prophets"];
        prophets.forEach(displayProphets);
    });

function getOrdinal(n) {
    let ord = 'th';
    
    if (n % 10 == 1 && n % 100 != 11)
    {
        ord = 'st';
    }
    else if (n % 10 == 2 && n % 100 != 12)
    {
        ord = 'nd';
    }
    else if (n % 10 == 3 && n % 100 != 13)
    {
        ord = 'rd';
    }
    
    return ord;

};

function displayProphets(prophet) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let bDay = document.createElement("p");
    let bPlace = document.createElement("p");
    let portrait = document.createElement("img");
    let prophetOrdinal = getOrdinal(prophet.order);
   
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    bDay.textContent = `Date of Birth: ${prophet.birthdate}`;
    bPlace.textContent = `Place of Birth; ${prophet.birthplace}`;
    portrait.innerHTML = `${prophet.imageurl}`

    portrait.setAttribute("src", prophet.imageurl);    
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${prophetOrdinal} Latter-day President`);
    portrait.setAttribute("loading", "lazy");
      
    card.appendChild(h2);
    card.appendChild(bDay);
    card.appendChild(bPlace);
    card.appendChild(portrait);

    document.querySelector("div.cards").appendChild(card);
};





