/*1-Create a function that prints the message "Hi, [name]" on the browser screen and the console. You must use a parameter for the name.*/

function greeting (name) {
    console.log('Hi, ' + name);
    const answer1 = document.getElementById('answer-1');
    answer1.innerHTML = `Hi, ${name}`;
}

greeting('John');

/*2-Create a function that receives two numbers as parameters and returns the addition of them. You must print the result on the browser screen and the console.*/

function addition (number1, number2) {
    return number1 + number2;
}

console.log(addition(5,7));
const answer2 = document.getElementById('answer-2');
answer2.innerHTML = addition(5,7);

/*3-Create a function that determines if a number is even or uneven. You must print the result on the browser screen and the console.*/

function isEven (number) {
    if (number % 2 == 0) {
        return true;
    } 
    return false;
}

const outcome1 = isEven(77);
console.log(outcome1);

const outcome2 = isEven(24);
console.log(outcome2);

const answer3 = document.getElementById('answer-3');
answer3.innerHTML = `
<ul>
    <li>${outcome1}</li>
    <li>${outcome2}</li>
</ul>
`;
