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

/*6-Create the nodes required to print a form.*/

/*7-Create the nodes required to print a table.*/

/*8-Create an array of 10 objects with their pairs of key-values. Every object must have the following keys: id, name, status, species, type, gender. It's up to you to assign the corresponding value for each key.*/

/*9-Print each element of the object inside the table you previously created.*/