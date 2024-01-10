/*1-Create a button in HTML and use JavaScript to show a message when it's clicked*/

const button1 = document.getElementById('button-answer-1');
button1.addEventListener('click', showMessage);

function showMessage() {
    alert('Thanks for clicking me :)');
}

/*2-Change the content of a HTML element through JavasCript*/

const button2 = document.getElementById('button-2');
button2.addEventListener('click', giveSurprise);

function giveSurprise() {
    const answer2 = document.getElementById('answer-2');
    answer2.style.marginTop = "10px";
    answer2.innerHTML = "&#11088;".repeat(5);
}

/*3-Hide and show HTML elements using JavaScript*/

const button3 = document.getElementById('button-3');
button3.addEventListener('click', hideMe);

function hideMe() {
    const chocolate = document.getElementById('chocolate');
    chocolate.classList.remove('show');
    chocolate.classList.add('hide');
    button3.classList.add('hide');
}

const button4 = document.getElementById('button-4');
button4.addEventListener('click', showMe);

function showMe() {
    const greenSalad = document.getElementById('green-salad');
    greenSalad.classList.remove('hide');
    greenSalad.classList.add('show');
}

/*4-Create an array of 10 names. Create a function that prints on the screen a list of that array*/

const myArrayOfNames = ["Ángela", "Belén", "Carlos", "Daniela", "Esmeralda", "Fausto", "Guillermo", "Helena", "Inés", "Joel"];

function printMyArrayOfNames() {
    const answer4 = document.getElementById('answer-4');

    let ulContent = "<ul>";

    for (const name of myArrayOfNames) {
        ulContent += `<li>${name}</li>`;
    }

    ulContent += `</ul>`;
        
    answer4.innerHTML = ulContent;
}

printMyArrayOfNames();

/*5-Create an array of numbers. Create a function that prints on the screen how many numbers there are in that array*/

const myArrayOfNumbers = [11,22,33,44,55,66,77,88,99];

const answer5 = document.getElementById('answer-5');

function howManyNumbers () {
    answer5.innerHTML = myArrayOfNumbers.length;
}

howManyNumbers();

/*6-Create the nodes required to print a form.*/

const form = document.createElement('form');

form.style.display = "flex";

form.style.flexDirection = "column";

form.style.maxWidth = "300px";

const input = document.createElement('input');

const button = document.createElement('button');

button.innerText = "Send";

form.appendChild(input);

form.appendChild(button);

const answer6 = document.getElementById('answer-6');

answer6.appendChild(form);

/*7-Create the nodes required to print a table.*/

const table = document.createElement('table');

/*8-Create an array of 10 objects with their pairs of key-values. Every object must have the following keys: id, name, status, species, type, gender. It's up to you to assign the corresponding value for each key.*/

const animals = [
    {
        id: 1,
        name: "Pepito",
        status: "dead",
        species: "cricket",
        type: "green",
        gender: "fluid"
    },
    {
        id: 2,
        name: "Lía",
        status: "fat",
        species: "cat",
        type: "sleepy",
        gender: "mademoiselle"
    },
    {
        id: 3,
        name: "Rocky",
        status: "jamon-addicted",
        species: "dog",
        type: "barky",
        gender: "vicious"
    },
    {
        id: 4,
        name: "Sira",
        status: "ball-obsessed",
        species: "dog",
        type: "cute",
        gender: "lady"
    },
    {
        id: 5,
        name: "Paco",
        status: "nervous",
        species: "dog",
        type: "kayak-rider",
        gender: "unknown"
    },
    {
        id: 6,
        name: "Valerius",
        status: "learning",
        species: "human",
        type: "dj",
        gender: "male"
    },
    {
        id: 7,
        name: "Antoñanzas",
        status: "programming",
        species: "robot",
        type: "pacient",
        gender: "sexy"
    },
    {
        id: 8,
        name: "Jesucrista",
        status: "eager to help",
        species: "drama queen",
        type: "needy",
        gender: "sexy"
    },
    {
        id: 9,
        name: "Robert",
        status: "solving the next big integral",
        species: "retired",
        type: "duo-lingo-addicted",
        gender: "male"
    },
    {
        id: 10,
        name: "Marcelita",
        status: "cleaning",
        species: "retired",
        type: "10.000 steps maker",
        gender: "madame"
    }
]

/*9-Print each element of the object inside the table you previously created.*/


let tableContent = "<tr>";

for (const key in animals[0]) {
    tableContent += `<th>${key}</th>`;
}

tableContent += "</tr>";

for (const animal of animals) {
    tableContent += "<tr>";

    for (const key in animal) {
        tableContent += `<td>${animal[key]}</td>`;
    }

    tableContent += "</tr>";

}

table.innerHTML = tableContent;

const answer7_9 =document.getElementById('answer-7-9');

answer7_9.appendChild(table);
