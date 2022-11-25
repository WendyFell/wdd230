const requestURL = "https://wendyfell.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");

async function getData() {
	try {
		const request = new Request(requestURL);
		const response = await fetch(request);
		console.log(response.ok);
		const jsonObject = await response.json();
		const allBusinesses = jsonObject["businesses"];
		console.log(allBusinesses);
		const levels = allBusinesses.filter((business) =>
			business.membershipLevel === 'Silver' || business.membershipLevel === 'Gold'
		);
		console.log(levels);
		const index = Math.floor(Math.random() * (3 - 1) + 1);
        console.log(index);
		levels.splice(index - 1, 1);
        console.log(levels.splice);
		levels.forEach((business, index) => {
			displayBusinesses(business, index);
		});
		
		
		return jsonObject;
	} catch(err){
		console.log(err)
	}
};
getData().then((jsonObject) => console.log(jsonObject));

function displayBusinesses(business, index) {
	let icon = document.createElement("img");
	let card = document.createElement("section");
	let h3 = document.createElement("h3");
	let link = document.createElement("a")
	
			
	h3.textContent = business.name;	
	link.textContent = business.webUrl;
	
	link.setAttribute("href", business.webUrl)
	icon.setAttribute("src", business.imageIconUrl)
	icon.setAttribute("alt", `${business.name}'s icon`)
			
	card.appendChild(icon);
	card.appendChild(h3);
	card.appendChild(link);
		
	document.querySelector("#cards").appendChild(card);
};



