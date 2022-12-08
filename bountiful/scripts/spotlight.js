const requestURL = "https://wendyfell.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");

async function getData() {
	try {
		const request = new Request(requestURL);
		const response = await fetch(request);
		const jsonObject = await response.json();
		const allBusinesses = jsonObject["businesses"];
		const levels = allBusinesses.filter((business) =>
			business.membershipLevel === 'Silver' || business.membershipLevel === 'Gold'
		); // Filters just silver and gold levels
		
		for (let i = 0; i < 3; i++) { // Want to select 3 businesses
			let rand = Math.floor(Math.random() * levels.length); // pick a random business from the array
			
			let icon = document.createElement("img"); // Display the getData function
			let card = document.createElement("section");
			let h3 = document.createElement("h3");
			let link = document.createElement("a");
			let p1 = document.createElement("p");
			let p2 = document.createElement("p");
			let list = card.classList;
		
			h3.textContent = levels[rand].name;
			link.textContent = levels[rand].webUrl;
			p1.textContent = levels[rand].address;
			p2.textContent = levels[rand].phoneNumber;
			
		
			link.setAttribute("href", levels[rand].webUrl);
			icon.setAttribute("src", levels[rand].imageIconUrl);
			icon.setAttribute("alt", `${levels[rand].name}'s icon`);
			list.add("spotStyle");
		
			card.appendChild(icon);
			card.appendChild(h3);
			card.appendChild(link);
			card.appendChild(p1);
			card.appendChild(p2);
		
			document.querySelector("#cards").appendChild(card);
	
			levels.splice(rand,1); // Deletes the business just displayed, next time levels.length will be one shorter
				
			}
	} catch(err){
		console.log(err)
	}
	
};
getData().then((jsonObject) => console.log(jsonObject)); // Run the function