// Getting a full date
const datefield = document.querySelector("#date"); // Select the element to manipulate

const now = new Date(); // derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = fulldate;

// Getting the time since last visit
const lastVisitDisplay = document.querySelector("#lastVisitDisplay");

// get the stored value of the last visit in local storage
let lastVisit = localStorage.getItem("time-ls");

// Check if last item is stored, if it is null, it will be the first visit.

if (lastVisit !== null) {
    lastVisitDisplay.textContent = lastVisit;  
 } else {
   lastVisitDisplay.textContent =  "This is your first visit";
 };

// Math to get the time from the last visit until now.
lastVisit = now - (lastVisit / 60000);
// lastVisit = lastVisit / 60000;


// Set the amount in local storage
localStorage.setItem("time-ls", lastVisit);



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


// Form
