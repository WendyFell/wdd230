// Getting a full date
const datefield = document.querySelector("#date"); // Select the element to manipulate

const now = new Date(); // derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = fulldate;


// Getting the current year
const date1 = document.querySelector("#year");
date1.innerHTML = new Date().getFullYear();

// Getting the last modified date
const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");

// Toggle menu with hamburger button
function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;