const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});

const requestURL = "https://wendyfell.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();        
    })
    .then (function (jsonObject) {
        const businesses = jsonObject["businesses"];
        businesses.forEach(displayBusinesses);
    });

	function displayBusinesses(business) {
		let card = document.createElement("section");
		let h2 = document.createElement("h2");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let web = document.createElement("link")
		let icon = document.createElement("img");
			   
		h2.textContent = `${business.name}`;
		p1.textContent = `Date of Birth: ${business.address}`;
		p2.textContent = `Place of Birth; ${business.phoneNumber}`;
		web.innerHTML = business.webUrl
		icon.innerHTML = `${business.imageIconUrl}`
	
		// portrait.setAttribute("src", prophet.imageurl);    
		// portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${prophetOrdinal} Latter-day Prophet`);
		// portrait.setAttribute("loading", "lazy");
		  
		card.appendChild(h2);
		card.appendChild(p1);
		card.appendChild(p2);
		card.appendChild(web);
		card.appendChild(icon);
	
		document.querySelector("div.cards").appendChild(card);
	};