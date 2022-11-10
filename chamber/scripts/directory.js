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
		let h3 = document.createElement("h3");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let link = document.createElement("a")
		let icon = document.createElement("img");

		
		
			   
		h3.textContent = business.name;
		p1.textContent = business.address;
		p2.textContent = business.phoneNumber;
		link.href = business.webUrl;
		icon.innerHTML = business.imageIconUrl;
	
		// portrait.setAttribute("src", prophet.imageurl);    
		// portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${prophetOrdinal} Latter-day Prophet`);
		// portrait.setAttribute("loading", "lazy");
		  
		card.appendChild(h3);
		card.appendChild(p1);
		card.appendChild(p2);
		card.appendChild(link);
		card.appendChild(icon);
	
		document.querySelector("div.cards").appendChild(card);
	};