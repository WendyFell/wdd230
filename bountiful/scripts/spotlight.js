const requestURL = "https://wendyfell.github.io/wdd230/bountiful/json/cities.json";
const cards = document.querySelector(".cards");

async function getData() {
	try {
		const request = new Request(requestURL);
		const response = await fetch(request);
		const jsonObject = await response.json();
		const allCities = jsonObject["cities"];
				
		for (let i = 0; i < 4; i++) { 
			let rand = Math.floor(Math.random() * allCities.length); 
			
			let icon = document.createElement("img"); 
			let card = document.createElement("section");
			let h3 = document.createElement("h3");
			let p1 = document.createElement("p");
			
			let list = card.classList;
		
			h3.textContent = allCities[rand].name;
			console.log(h3);
			p1.textContent = allCities[rand].info;
						
			icon.setAttribute("src", allCities[rand].img);
			icon.setAttribute("alt", `${allCities[rand].name}'s icon`);
			list.add("spotStyle");
					
			card.appendChild(h3);
			card.appendChild(icon);
			card.appendChild(p1);
		
			document.querySelector("#cards").appendChild(card);
	
			allCities.splice(rand,1); 
				
			}
	} catch(err){
		console.log(err)
	}
	
};
getData();