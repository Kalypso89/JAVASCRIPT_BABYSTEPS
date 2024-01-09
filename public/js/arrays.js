/*0-Create an array of 10 numbers*/

const myArray = [0,1,3,5,7,9,2,4,6,8];

/*1-Create a function that prints all the numbers of the previous array on the console (for loop)*/

function printMyArray () {
    for (const number of myArray) {
        console.log(number);
    }
}
console.log('Exercise 1');
printMyArray();

/*2-Create a function that adds a number to the previous array*/

function addNumberToArray () {
    myArray.push(10);
}

addNumberToArray ();
console.log('Exercise 2');
printMyArray();

/*3-Create a function that deletes all the even numbers from the previous array*/

function deleteEvenNumbers () {
    const myNewArray = myArray.filter((number => (number % 2 !== 0)));
    myArray.length = 0;
    myArray.push(...myNewArray);
}

deleteEvenNumbers();
console.log('Exercise 3');
printMyArray();

/*4-Create a function that returns the biggest number in the array*/

function biggestNumberOfArray () {
    function compare(a,b) {
        return b-a;
    }
    myArray.sort(compare);
    return myArray[0];
}

console.log('Exercise 4');

console.log(biggestNumberOfArray());

/*5-Create a function that returns the smallest number in the array*/

function smallestNumberOfArray () {
    function compare(a,b) {
        return a-b;
    }
    myArray.sort(compare);
    return myArray[0];
}

console.log('Exercise 5');

console.log(smallestNumberOfArray());

/*6-Create a function that converts all the letters of a text to lowercase*/

function toLowerCase(text) {
    return text.toLowerCase();
}

console.log('Exercise 6');

console.log(toLowerCase('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aliquam'));

/*7-Create a function that converts all the letters of a text to uppercase*/

function toUpperCase(text) {
    return text.toUpperCase();
}

console.log('Exercise 7');

console.log(toUpperCase('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aliquam'));

/*8-Create a function that receives an array of names and converts the first letter of each one to uppercase*/

function namesToUpperCase(myArrayOfNames) {
    for (let index in myArrayOfNames) {
        const name = myArrayOfNames[index];

        const nameWithCapitalLetter = name[0].toUpperCase() + name.substring(1);

        myArrayOfNames[index] = nameWithCapitalLetter;
    }
}

const myArrayOfNames = ['margaret', 'john', 'ada', 'tom'];

console.log('Exercise 8');

namesToUpperCase(myArrayOfNames);

console.log(myArrayOfNames);




