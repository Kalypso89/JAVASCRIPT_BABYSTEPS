/* 1-Create variables containing different types of data: number, string, boolean, and print their value on the browser screen and console.*/

let dateBorn = 1989;
let dateCoding = 2023;
let age = 34;
let myName = "Ángela";
let hometown = "Santander"
let currentCity = "Oviedo";
let dogs = true;
let cats = false;

console.log(dateBorn);
console.log(dateCoding);
console.log(age);
console.log(myName);
console.log(hometown);
console.log(currentCity);
console.log(dogs);
console.log(cats);

let answer1 = document.getElementById('answer-1');
answer1.innerHTML = `
<ul>
    <li>let dateBorn = ${dateBorn};</li>
    <li>let dateCoding = ${dateCoding};</li>
    <li>let age = ${age};</li>
    <li>let myName = ${myName};</li>
    <li>let hometown = ${hometown}</li>
    <li>let currentCity = ${currentCity};</li>
    <li>let dogs = ${dogs};</li>
    <li>let cats = ${cats};</li>
</ul>
`

/* 2-Identify which of the previous variables are integers and operate with them (addition, substraction, multiplication and division). You must print the result on the browser screen and the console.*/

let addition = dateBorn + dateCoding + age;
let substraction = dateBorn - dateCoding - age;
let multiplication = dateBorn * dateCoding * age;
let division = dateBorn / dateCoding / age;
console.log(addition);
console.log(substraction);
console.log(multiplication);
console.log(division);

let answer2 = document.getElementById('answer-2');
answer2.innerHTML = `
<ul>
    <li>let addition = ${dateBorn} + ${dateCoding} + ${age} = ${addition}</li>
    <li>let substraction = ${dateBorn} - ${dateCoding} - ${age} = ${substraction};</li>
    <li>let multiplication = ${dateBorn} * ${dateCoding} * ${age} = ${multiplication};</li>
    <li>let division = ${dateBorn} / ${dateCoding} / ${age} = ${division};</li>
</ul>
`

/*3-Identify which of the previous variables are strings and concatenate them. You must print the result on the browser screen and the console.*/

console.log(`${myName} was born in ${hometown}, but now she lives in ${currentCity}.`);
let answer3 = document.getElementById('answer-3');
answer3.innerHTML = `${myName} was born in ${hometown}, but now she lives in ${currentCity}.`;