// Form
// const form = document.querySelector('#form');
// const input1 = document.querySelector('#phone');
// const input2 = document.querySelector("#email");
// const input3= document.querySelector("#title");
// const output = document.querySelector('#output');

// const regex1 = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;
// const regex2 = [A-Z][a-z];

// function testInfo(phoneInput) {
//   const ok = regex1.exec(phoneInput.value);

//   output.textContent = ok
//     ? `Thanks, your phone number is ${ok[0]}`
//     : `${phoneInput.value} isn't a phone number with area code!`;
// }

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   testInfo(input1);
// });

const subTime = document.querySelector("#submissionTime");

subTime.value = new Date();
