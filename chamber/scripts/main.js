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

// Toggle menu with hamburger button-one example
function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;


// // Another method from week 4 by Brother Blazzard
// const hambutton = document.querySelector('.ham');
// const mainnav = document.querySelector('.navigation')

// hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// // To solve the mid resizing issue with responsive class on
// window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// /*** Programming Notes **************************************
//   Arrow Functions - es6 syntactically compact alternative to a regular function expression
//   see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//   or https://www.w3schools.com/js/js_arrow_function.asp

//   classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
//   */


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


