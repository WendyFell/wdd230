const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

const getFruit = async () => {
  const response = await fetch(fruitURL);
  fruitList = await response.json();
  output(fruitList);
};
getFruit();

const output = (data) => {
    let dropdown = document.querySelector("#myData");
    dropdown.length = 0;
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose';
    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;
    let option;    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;      	  
      	  dropdown.add(option);
      }
    
}; 


