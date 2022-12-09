// const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

const getFruit = async () => {
  const response = await fetch(
    "https://brotherblazzard.github.io/canvas-content/fruit.json"
  );
  fruitList = await response.json();
  output(fruitList);
};
getFruit();

const output = (data) => {
  // fruits.forEach((data) => {

    let dropdown = document.querySelector("#myData");
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose ';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  
      	  dropdown.add(option);

      }
    // let article = document.createElement("article");
    // let fruitName = document.createElement("h3");
    // fruitName.textContent = fruit.name;
    // article.appendChild(fruitName);
    // document.querySelector("#myData").appendChild(article);
  // });
}; 


// let dropdown = document.getElementById("myData");
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose ';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

// fetch(url)  
//   .then(  
//     function(response) {  
//       if (response.status !== 200) {  
//         console.warn('Looks like there was a problem. Status Code: ' + 
//           response.status);  
//         return;  
//       }

//       // Examine the text in the response  
//       response.json().then(function(data) {  
//         let option;
    
//     	for (let i = 0; i < data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = data[i].name;
      	  
//       	  dropdown.add(option);
//     	}    
//       });  
//     }  
//   )  
//   .catch(function(err) {  
//     console.error('Fetch Error -', err);  
//   });