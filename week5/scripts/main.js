const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    // if 
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li'); // Create an li element
    const delBtn = document.createElement('button'); // Create a delete button
    const listText = document.createElement('span'); //Create a span element

    listItem.appendChild(listText); // append the span as child of the list item (li)
    listText.textContent = myItem; // Populate the li elements textContent or innerHTML with the input
    
    listItem.appendChild(delBtn); // append the delete button as child of the list item (li)
    delBtn.textContent = '❌'; // Populate the button textContent with an X
        
    list.appendChild(listItem); // append the list item (li) as a child of the list

    // Add an event listener to the delete button that removes the li element when clicked
    delBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    input.focus();
});
