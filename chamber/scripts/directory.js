const gridbutton = document.querySelector("#dirGrid");
const listbutton = document.querySelector("#dirList");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("dirGrid");
	display.classList.remove("dirList");
});

listbutton.addEventListener("click", () => {
	display.classList.add("dirList");
	display.classList.remove("dirGrid");
});

const requestURL = "https://wendyfell.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then ((response) => {
        return response.json();        
    })
    .then ((jsonObject) => {
        const businesses = jsonObject["businesses"];
        businesses.forEach(displayBusinesses);
    });


function displayBusinesses(business, index) {
	let icon = document.createElement("img");
	let card = document.createElement("section");
	let h3 = document.createElement("h3");
	let p1 = document.createElement("p");
	let p2 = document.createElement("p");
	let link = document.createElement("a")
	
			
	h3.textContent = business.name;
	p1.textContent = business.address;
	p2.textContent = business.phoneNumber;
	link.textContent = business.webUrl;
	
	link.setAttribute("href", business.webUrl)
	icon.setAttribute("src", business.imageIconUrl)
	icon.setAttribute("alt", `${business.name}'s icon`)
			
	card.appendChild(icon);
	card.appendChild(h3);
	card.appendChild(p1);
	card.appendChild(p2);
	card.appendChild(link);
		
	document.querySelector("article.cards").appendChild(card);
};

// async function getData() {
// 	try {
// 		const request = new Request(requestURL);
// 		const response = await fetch(request);
// 		console.log(response.ok);
// 		const jsonObject = await response.json();
// 		const allBusinesses = jsonObject["businesses"];
// 		console.log(allBusinesses);
// 		const levels = allBusinesses.filter((business) =>
// 			business.membershipLevel === 'Silver' || business.membershipLevel === 'Gold'
// 		);
		// console.log(levels);
		// const index = Math.floor(Math.random());
		// levels.splice(index - 1, 1);
// 		levels.forEach((business, index) => {
// 			displayBusinesses(business, index);
// 		});
// 		console.log(index);
		
// 		return jsonObject;
// 	} catch(err){
// 		console.log(err)
// 	}
// };
// getData().then((jsonObject) => console.log(jsonObject));



