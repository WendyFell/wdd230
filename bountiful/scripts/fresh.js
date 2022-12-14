// const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

// const getFruit = async () => {
//   const response = await fetch(fruitURL);
//   fruitList = await response.json();
//   output(fruitList);
// };
// getFruit();

// const output = (data) => {
//     let dropdown = document.querySelector("#myData");
//     dropdown.length = 0;
//     let defaultOption = document.createElement('option');
//     defaultOption.text = 'Choose';
//     dropdown.add(defaultOption);
//     dropdown.selectedIndex = 0;
//     let option;    
//     	for (let i = 0; i < data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = data[i].name;      	  
//       	  dropdown.add(option);
//       }
    
// }; 

const section = document.querySelector('div.select');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayFruitInfo(text));

function displayFruitInfo(fruitString) {
  // let total = 0;
  // let male = 0;

  const fruits = JSON.parse(fruitString);

  for (let i = 0; i < fruits.length; i++) {
    let label = document.createElement('div');
    label.className = "select-item";
    label.setAttribute("type", "checkbox");
    label.innerHTML = fruits[i].name;
    section.appendChild(label);
    // for (const kitten of cats[i].kittens) {
    //   total++;
    //   if (kitten.gender === 'm') {
    //     male++;
    //   }
    // }

    // if (i < (cats.length - 1)) {
    //   motherInfo += `${ cats[i].name }, `;
    // } else {
    //   motherInfo += `and ${ cats[i].name }.`;
    // }
  }

  // kittenInfo  = `There are ${ total } kittens in total, ${ male } males and ${ total - male } females.`;


// Don't edit the code below here!

  // para1.textContent = motherInfo;
  // para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    
