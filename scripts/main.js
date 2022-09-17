// Getting the current year
const date1 = document.querySelector("#date1");

try {
	const options = {		
		year: "numeric"
	};
	date1.innerHTML = `&copy; ${new Date().toLocaleDateString("en-US", options)}  | Wendy Fellows | Utah, USA`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}

// Getting the last modified date
const date2 = document.querySelector("#date2");

try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date2.innerHTML = `Last modified ${new Date(document.lastModified).toLocaleDateString("en-US", options)}`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}


