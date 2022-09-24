// Getting the current year
const date1 = document.querySelector("#date1");

const options = {		
	year: "numeric"
};
date1.innerHTML = `${new Date().toLocaleDateString("en-US", options)}`;

// Getting the last modified date
const date2 = document.querySelector("#date2");

const options1 = {
	weekday: "long",
	day: "numeric",
	month: "long",
	year: "numeric"
};
date2.innerHTML = `${new Date(document.lastModified).toLocaleDateString("en-US", options1)}`;


