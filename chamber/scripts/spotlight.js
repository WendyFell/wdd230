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
		
	document.querySelector("#cards").appendChild(card);
};

// const requestURL = "https://wendyfell.github.io/wdd230/chamber/json/data.json";
// const cards = document.querySelector('.cards');
// const display = document.querySelector("article");


// async function fetchData() {    
//     const response = await fetch(requestURL);
//     const businesses= await response.json();
//     return businesses;
// };
// fetchData().then(businesses => {
//     businesses;
//  });

// cards.innerHTML = '';

// async function getData() {
//   const request = new Request(requestURL);
//   const response = await fetch(request);
//   const jsonObject = await response.json();
//   const allBusinesses = jsonObject["businesses"];
//   const businesses = allBusinesses.filter((business) =>
//       business.membershipLevel === 'silver' || business.membershipLevel === 'gold'
//   );
//   const index = Math.floor(Math.random() * (3 - 1 + 1) + 1);
//   businesses.splice(index - 1, 1);
//   businesses.forEach((business, index) => {
//     displayBusinesses(business, index);
//   });
//   console.log(index);
// }

// function displayBusinesses(business, index) {
//   let spotlight = document.createElement('div');
//   spotlight.innerHTML = `<div class="spotlight${index + 1} spotlight">
//     <h2>${business.name}</h2>
//     <img src="${business.imageurl}" alt="${business.name}">    
//     <p>${company.address}</p>
//     <p>Phone: ${company.phonenumber}</p>
//     <a target="_blank" href="${company.website}">${company.website}</a>`;
//   cards.appendChild(spotlight);
//   console.log(spotlight)
// };


