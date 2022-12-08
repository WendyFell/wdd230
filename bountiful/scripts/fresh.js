const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

const getTemples = async () => {
  const response = await fetch(
    "https://brotherblazzard.github.io/canvas-content/fruit.json"
  );
  templeList = await response.json();
  output(templeList);
};
getTemples();

const output = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");

    let templeName = document.createElement("h3");
    templeName.textContent = temple.name;

   

    article.appendChild(templeName);
   

    document.querySelector("#myData").appendChild(article);
  });
};



// async function getFruits() {
//   try {
//     const response = await fetch(fruitURL);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       getFruitList(data);
//     } else {
//       console.log(`Response not OK ${await response.text()}`);
//       throw Error (await response.text());
//     }
//   } catch (error) {
//       console.log(error);
//   }
  
// };

// getFruits();

// function getFruitList(data) {
//   console.log(data);
//   results = data;


// }
