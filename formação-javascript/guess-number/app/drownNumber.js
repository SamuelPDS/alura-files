const smallerElement = document.querySelector('#smaller-number');
const biggerElement = document.querySelector('#bigger-number');
const smallerValue = 0;
const biggerValue = 1000;
const secretNumber = GenerateRandomNum()

function GenerateRandomNum() {
   return parseInt(Math.random() * biggerValue + 1)
}

console.log("Secret number: " + secretNumber)

smallerElement.innerHTML = smallerValue;
biggerElement.innerHTML = biggerValue;


