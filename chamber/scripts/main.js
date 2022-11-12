// Getting a full date
const datefield = document.querySelector("#date"); // Select the element to manipulate

const now = Date().now; // derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = fulldate;

// Getting the time since last visit
const lastVisitDisplay = document.querySelector("#lastVisitDisplay");

// get the stored value of the last visit in local storage
let lastVisit = localStorage.getItem("time-ls");

// Check if last item is stored, if it is null, it will be the first visit.

if (lastVisit !== null) {

    let duration = Math.ceil((now - lastVisit) / 86400000);//Math.ceil will round up to the next integer so that we can display a whole number
    lastVisitDisplay.textContent = `Time since last visit: ${duration} minutes`;

} else {
    lastVisitDisplay.textContent = "Welcome! This is your first visit.";
};

// Set the amount in local storage
localStorage.setItem("time-ls", now);//the variable now will be the lastVisit Date object for the next time the user visits


// Getting the current year
const date1 = document.querySelector("#year");
date1.innerHTML = new Date().getFullYear();

// Getting the last modified date
const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");

// Toggle menu with hamburger button-one example
function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;





// Get the meet and greet button to show only on Monday and Tuesdays
const d = new Date();
let day = d.getDay()

if (day === 1) {
    document.getElementById("meet").style.display = "";
}
else if (day === 2) {
    document.getElementById("meet").style.display = "";
}
else {
    document.getElementById("meet").style.display = "none";
}




// active page has aria attribute
document.querySelectorAll(".navLink").forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute("aria-current", "page")
    }
});




