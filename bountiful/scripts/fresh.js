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
// let para2 = document.createElement('p');
// let motherInfo = 'The mother cats are called ';
// let kittenInfo;
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayFruitInfo(text));

function displayFruitInfo(fruitString) {
  // let total = 0;
  // let male = 0;

  const fruits = JSON.parse(fruitString);

  for (let i = 0; i < fruits.length; i++) {
    let div = document.createElement('div');
    let input = document.createElement("input");
    let label = document.createElement("label");

    label.innerHTML = fruits[i].name;

    // label.className = "select-item";
    label.setAttribute("for", fruits[i].name)
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", fruits[i].name);
    input.setAttribute("name", "fruit");
    input.setAttribute("value", fruits[i].name);
    section.appendChild(div);
    div.appendChild(input);
    div.appendChild(label);
    
    
    
  }

}

